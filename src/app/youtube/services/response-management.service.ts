import { Injectable, Optional } from '@angular/core';

import { WordFilterPipe } from '../pipes/word-filter.pipe';
import responses from '../../responses';
import { ResponseInt, SearchResponseInt } from '../models/response-model';
import {
  ResponseVidInt,
  SearchResponseVidInt,
} from '../models/response-vid-model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { map, switchMap, catchError } from 'rxjs';
import { Store } from '@ngrx/store';
import { PageState } from '../redux/state.model';
import { updYtCardList } from '../redux/actions/yt-search-action';
@Injectable({
  providedIn: 'root',
})
export class ResponseManagementService {
  resps: ResponseInt;
  showFilters: boolean;
  filterString: string;
  public selectedVid: ResponseVidInt | null;
  constructor(
    public wordFilter: WordFilterPipe,
    private http: HttpClient,
    public authService: AuthService,
    private store: Store<PageState>
  ) {
    this.resps = responses;
    this.showFilters = false;
    this.filterString = '';
    this.selectedVid = null;
  }

  makeSearchQuery(query: string) {
    return this.http
      .get<SearchResponseInt>(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&type=video&maxResults=15&q=${query}&part=snippet`
      )
      .pipe(
        map((result) => result.items.map((item) => item.id.videoId).join(',')),
        switchMap((ids) =>
          this.http.get<ResponseInt>(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&id=${ids}&part=snippet,statistics`
          )
        ),
        map((searchResults) => this.store.dispatch(updYtCardList({videos: searchResults.items })) )
      );
  }
}
