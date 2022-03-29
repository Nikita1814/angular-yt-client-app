import { Component, ViewEncapsulation } from '@angular/core';
import { ResponseManagementService } from '../../../youtube/services/response-management.service';
import { ResponseVidInt } from '../../../youtube/models/response-vid-model';
import sortFuncs from '../../utils/sort-funcs';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FilteringCriteriaComponent {
  sortFuncs: {
    [key: string]: (a: ResponseVidInt, b: ResponseVidInt) => number;
  };
  constructor(public respService: ResponseManagementService) {
    this.sortFuncs = sortFuncs;
  }
}
