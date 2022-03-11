import { Injectable } from '@angular/core';
import responses from './responses';
import { ResponseInt } from './shared/response-model';
import { ResponseVidInt } from './shared/response-vid-model';

@Injectable({
  providedIn: 'root'
})
export class ResponseManagementService {
resps:ResponseInt
filterBy:string
filtered: ResponseVidInt[]
showResps:boolean
  constructor() {
    this.resps = responses
    this.filtered = responses.items
    this.filterBy = ""
    this.showResps = false
   }
}
