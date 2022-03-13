import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ResponseManagementService } from '../../../youtube/services/response-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchString:string
  constructor(
    public respService: ResponseManagementService,
    public router: Router,
    public authService: AuthService
  ) {
    this.searchString = ''
  }
  submitSearch() {
    this.respService.makeSearchQuery(this.searchString)
  }

  ngOnInit(): void {}
}
