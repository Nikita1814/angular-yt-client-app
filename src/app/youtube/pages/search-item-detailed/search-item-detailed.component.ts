import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseVidInt } from '../../models/response-vid-model';
import { ResponseManagementService } from '../../services/response-management.service';

@Component({
  selector: 'app-search-item-detailed',
  templateUrl: './search-item-detailed.component.html',
  styleUrls: ['./search-item-detailed.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SearchItemDetailedComponent implements OnInit {
  itemId!: string;
  item!: ResponseVidInt;
  vidDate!: Date;
  constructor(
    private respService: ResponseManagementService,
    public route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.itemId = this.route.snapshot.params['id'];
    this.item = this.item = this.respService.filtered.find((elem) => {
      return elem.id === this.itemId;
    }) as ResponseVidInt;
    this.vidDate = new Date(this.item.snippet.publishedAt);
  }
}
