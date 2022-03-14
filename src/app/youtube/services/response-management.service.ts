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

@Injectable({
  providedIn: 'root',
})
export class ResponseManagementService {
  resps: ResponseInt | null;
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
    this.resps = null;
    this.items = [];
    this.filtered = [];
    this.showResps = false;
    this.showFilters = false;
    this.filterString = '';
  }
  filterItems(func?: (a: ResponseVidInt, b: ResponseVidInt) => number): void {
    if (arguments.length > 0) {
      this.filtered = this.items.sort(func);
      this.filtered = this.wordFilter.transform(
        this.filtered,
        this.filterString
      );
      console.log(this.filtered);
      console.log('1');
    } else {
      this.filtered = this.items;
      this.filtered = this.wordFilter.transform(
        this.filtered,
        this.filterString
      );
      console.log(arguments.length);
    }
  }
  makeSearchQuery(query: string) {
    if (this.authService.loggedIn === true) {
      const options = {
        headers: new HttpHeaders({ 'Content-Type': 'applicaiton/json' }),
      };
      let idArr: string[] = [];
      let ids = '';
      const search = this.http.get<SearchResponseInt>(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&type=video&maxResults=15&q=${query}&part=snippet`,
        options
      );

      search.subscribe({
        next: (res) => {
          console.log(res);

          res.items.forEach((item) => {
            idArr.push(item.id.videoId);
          });
          console.log(idArr);
          ids = idArr.join(',');
          console.log(ids);
          const getStats = this.http.get<ResponseInt>(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBY5eUdgQYL-eVEf9Yhr7A-406ScXT2dp8&id=${ids}&part=snippet,statistics`,
            options
          );
          getStats.subscribe({
            next: (result) => {
              console.log(result);
              this.resps = result;
              this.items = result.items;
              this.filtered = this.items;
              this.router.navigate(['youtube']);
            },
          });
        },
        error: console.error,
      });
    }
  }
}
