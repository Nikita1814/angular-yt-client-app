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
import { Store } from '@ngrx/store';
import { PageState } from '../../redux/state.model';
import { Observable } from 'rxjs';
import { UserCardInfo } from '../../models/user-card-info-model';
import { getYtVids } from '../../redux/selectors/ytVideos.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {
  vids!: ResponseVidInt[];
  vids$: Observable<ResponseVidInt[]>;

  constructor(
    public respService: ResponseManagementService,
    private store: Store<PageState>,
    private cr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log(this.store);
    this.vids = [];
    this.vids$ = this.store.select(getYtVids);
    /*this.vids$.subscribe((result) => {
      console.log(result)
      this.vids = result});*/
  }

  /*this.cr.detectChanges();*/
  handleSearch(val: string) {
    /*this.respService.makeSearchQuery(val).subscribe((result) => {
      this.vids = [...result.items];
    });*/
    this.cr.detectChanges();
    this.respService.makeSearchQuery(val).subscribe();
    this.vids$.subscribe((videos: ResponseVidInt[]) => (this.vids = videos));
    console.log('search is being handled');
  }

  handleSortUpdate(fun: (a: ResponseVidInt, b: ResponseVidInt) => number) {
    this.vids = [...this.vids.sort(fun)];
  }
}
