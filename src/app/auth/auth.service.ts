import { Injectable } from '@angular/core';
import { UserObjInt } from './models/user-model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserObjInt | null;
  loggedIn: boolean;
  constructor(private router: Router) {
    this.user =
      localStorage.getItem('user') !== null
        ? JSON.parse(localStorage.getItem('user') as string)
        : null;
    this.loggedIn = this.user !== null ? true : false;
  }
  signIn(mail: string, password: string) {
    this.user = {
      mail: mail,
      password: password,
      authToken: 'I am a token',
    };
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigateByUrl('');
    this.loggedIn = true;
  }
  signOut() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['auth/']);
    this.loggedIn = false;
  }
}
