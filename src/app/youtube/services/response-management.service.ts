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
@Injectable({
  providedIn: 'root',
})
export class ResponseManagementService {
  resps: ResponseInt;
  filtered: ResponseVidInt[];
  items: ResponseVidInt[];
  showResps: boolean;
  showFilters: boolean;
  filterString: string;
  constructor(
    public wordFilter: WordFilterPipe,
    private http: HttpClient,
    public authService: AuthService,
    private router: Router
  ) {
    this.resps = responses;
    this.items = [];
    this.filtered = [];
    this.showResps = false;
    this.showFilters = false;
    this.filterString = '';
  }
  filterItems(func?: (a: ResponseVidInt, b: ResponseVidInt) => number): void {
    if (func) {
      this.filtered =[...this.items.sort(func)];
      this.filtered = [...this.wordFilter.transform(
        this.filtered,
        this.filterString
      )];
    } else {
      this.filtered = [...this.items];
      this.filtered = [...this.wordFilter.transform(
        this.filtered,
        this.filterString
      )];
    }
    console.log('I filtered Items')
  }
  makeSearchQuery(query: string) {
    if (this.authService.loggedIn === true) {
      this.http
        .get<SearchResponseInt>(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&type=video&maxResults=15&q=${query}&part=snippet`
        )
        .pipe(
          map((result) =>
            result.items.map((item) => item.id.videoId).join(',')
          ),
          switchMap((ids) =>
            this.http.get<ResponseInt>(
              `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&id=${ids}&part=snippet,statistics`
            )
          )
        )
        .subscribe((result) => {
          this.resps = result;
          this.items = [...result.items];
          this.filtered = [...result.items];
          /*this.router.navigate(['youtube']);*/
        });
    }
  }
}
