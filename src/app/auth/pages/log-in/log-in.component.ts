import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LogInComponent implements OnInit  {
  mail!: string;
  password!: string;

  constructor(public authService : AuthService ) {

  }
  ngOnInit(): void {
    this.mail = '';
    this.password = '';
  }
  handleSignIn(mail: string, password: string) {
    this.authService.signIn(mail, password);
  }
}
