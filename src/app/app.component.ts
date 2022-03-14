import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { ResponseManagementService } from './youtube/services/response-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-Yt-client-app';
  constructor(
    public respService: ResponseManagementService,
    public authService: AuthService,
    public router: Router
  ) {
    if (authService.loggedIn === false) {
      router.navigate(['auth/']);
    }
  }
}
