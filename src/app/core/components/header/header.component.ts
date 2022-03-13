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
  constructor(
    public respService: ResponseManagementService,
    public router: Router,
    public authService: AuthService
  ) {}
  submitSearch() {
    if (this.authService.loggedIn === true) {
      this.router.navigate(['youtube']);
    }
  }

  ngOnInit(): void {}
}
