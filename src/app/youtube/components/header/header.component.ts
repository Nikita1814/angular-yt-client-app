import { outputAst } from '@angular/compiler';
import {
  Component,
  ViewEncapsulation,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserObjInt } from 'src/app/auth/models/user-model';
import { ResponseManagementService } from '../../services/response-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnInit {
  searchString!: string;
  user!: null | UserObjInt;
  @Output() initSearch = new EventEmitter<string>();
  constructor(
    public respService: ResponseManagementService,
    public router: Router,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.searchString = '';
    this.user = this.authService.user;
  }
  signOut() {
    this.authService.signOut();
    this.user = this.authService.user;
  }
  submitSearch() {
    /*this.respService.makeSearchQuery(this.searchString))*/
    this.initSearch.emit(this.searchString);
  }
}
