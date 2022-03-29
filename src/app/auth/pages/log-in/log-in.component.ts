import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  mail: string;
  password: string;
  constructor(public authService: AuthService) {
    this.mail = '';
    this.password = '';
  }


  handleSignIn(mail: string, password: string) {
    this.authService.signIn(mail, password);
  }
}
