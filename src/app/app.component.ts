import { Component, OnInit } from '@angular/core';
import { ResponseManagementService } from './youtube/services/response-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-Yt-client-app';
  constructor(public respService: ResponseManagementService) {}
  ngOnInit(): void {
    localStorage.clear();
  }
}
