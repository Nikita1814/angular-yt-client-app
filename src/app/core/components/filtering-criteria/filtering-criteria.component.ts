import { Component, OnInit } from '@angular/core';
import { ResponseManagementService } from '../../../youtube/services/response-management.service';
import { ResponseVidInt } from '../../../youtube/models/response-vid-model';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.css']
})
export class FilteringCriteriaComponent implements OnInit {
  sortFuncs : { [key: string]: (a: ResponseVidInt, b: ResponseVidInt) => number}
  constructor(public respService: ResponseManagementService) {
    this.sortFuncs = {
      'date': (a: ResponseVidInt, b: ResponseVidInt):number =>{
     const dOne = new Date (a.snippet.publishedAt).getTime()
     const dTwo = new Date(b.snippet.publishedAt).getTime()
     return dOne > dTwo? 1 : dOne < dTwo? -1: 0
      },
      'views':(a: ResponseVidInt, b: ResponseVidInt):number =>{
        const v1 = a.statistics.viewCount
        const v2 = b.statistics.viewCount
        return v1 > v2? 1 : v1 < v2? -1: 0
      }
    }
   }

  ngOnInit(): void {
  }

}
