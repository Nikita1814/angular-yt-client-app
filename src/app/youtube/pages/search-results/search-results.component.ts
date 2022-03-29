import { Component } from '@angular/core';
import { ResponseManagementService } from '../../services/response-management.service';
import { ResponseVidInt } from '../../models/response-vid-model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent {
  vids: ResponseVidInt[];
  constructor(public respService: ResponseManagementService) {
    this.vids = respService.filtered;
  }

  
}
