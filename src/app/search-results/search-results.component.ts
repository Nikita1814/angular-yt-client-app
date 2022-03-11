import { Component, OnInit } from '@angular/core';
import { ResponseManagementService } from '../response-management.service';
import { ResponseVidInt } from '../shared/response-vid-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  vids: ResponseVidInt[]
  constructor(public respService: ResponseManagementService) {
    this.vids = respService.filtered
   }

  ngOnInit(): void {

  }

}
