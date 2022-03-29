import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseVidInt } from 'src/app/youtube/models/response-vid-model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class SearchItemComponent implements OnInit {
  @Input('vidObj') vidObj!: ResponseVidInt;
  imgUrl: string;
  constructor(private router: Router) {
    this.imgUrl = '';
  }

  ngOnInit(): void {
    this.imgUrl = this.vidObj.snippet.thumbnails.high.url;
  }
}
