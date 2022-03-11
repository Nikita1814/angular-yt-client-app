import {Injectable, Optional } from '@angular/core';

import { WordFilterPipe } from './pipes/word-filter.pipe';
import responses from './responses';
import { ResponseInt } from './shared/response-model';
import { ResponseVidInt } from './shared/response-vid-model';

@Injectable({
  providedIn: 'root'
})
export class ResponseManagementService {
resps:ResponseInt
filtered: ResponseVidInt[]
items: ResponseVidInt[]
showResps:boolean
showFilters:boolean
filterString: string
  constructor(public wordFilter: WordFilterPipe) {
    this.resps = responses
    this.items = responses.items
    this.filtered = responses.items
    this.showResps = false
    this.showFilters = false
    this.filterString = ""
   }
   filterItems(func?:(a: ResponseVidInt, b: ResponseVidInt) => number): void {

    if ( arguments.length > 0){
      this.filtered = this.items.sort(func)
      this.filtered = this.wordFilter.transform(this.filtered,this.filterString)
      console.log(this.filtered)
      console.log('1')
    } else{
      this.filtered = this.items
      this.filtered = this.wordFilter.transform(this.filtered, this.filterString)
      console.log(arguments.length)
    }

   }
}
