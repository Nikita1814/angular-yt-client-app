import {
  Component,
  ViewEncapsulation,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ResponseManagementService } from '../../services/response-management.service';
import { ResponseVidInt } from '../../models/response-vid-model';
import sortFuncs from '../../../core/utils/sort-funcs';

@Component({
  selector: 'app-filtering-criteria',
  templateUrl: './filtering-criteria.component.html',
  styleUrls: ['./filtering-criteria.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FilteringCriteriaComponent implements OnInit {
  @Output() updateSort = new EventEmitter<
    (a: ResponseVidInt, b: ResponseVidInt) => number
  >();
  sortFuncs!: {
    [key: string]: (a: ResponseVidInt, b: ResponseVidInt) => number;
  };
  constructor(public respService: ResponseManagementService) {}
  
  ngOnInit(): void {
    this.sortFuncs = sortFuncs;
  }

  emitSort(sort: string) {
    this.updateSort.emit(this.sortFuncs[sort]);
  }
}
