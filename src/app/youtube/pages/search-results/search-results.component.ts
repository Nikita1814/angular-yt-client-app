import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResponseManagementService } from '../../services/response-management.service';
import { ResponseVidInt } from '../../models/response-vid-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SearchResultsComponent implements OnInit {
  vids!: ResponseVidInt[];
  constructor(public respService: ResponseManagementService) {

  }
  ngOnInit(): void {
    this.vids = this.respService.filtered;
  }
}
