import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ResponseManagementService } from '../../services/response-management.service';
import { ResponseVidInt } from '../../models/response-vid-model';
import { ResponseInt } from '../../models/response-model';
import responses from 'src/app/responses';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  vids!: ResponseVidInt[];
  constructor(
    public respService: ResponseManagementService,
    private cr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.vids = [];
  }
  handleSearch(val: string) {
    this.respService.makeSearchQuery(val).subscribe((result) => {
      this.vids = [...result.items]; // despite being reassigned it only works on second search button click
      /*this.cr.detectChanges();*/
    });
  }
  handleSortUpdate(fun: (a: ResponseVidInt, b: ResponseVidInt) => number) {
    this.vids = [...this.vids.sort(fun)];
  }
}
