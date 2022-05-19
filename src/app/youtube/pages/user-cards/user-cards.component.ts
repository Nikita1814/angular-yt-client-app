import {  } from '@angular/compiler';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardsComponent {
  formIsVisible: boolean = false;
  userCards: UserCardInfo[] = [];

  constructor() {}

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }

  addCard(card: UserCardInfo) {
    this.userCards.push(card);
  }

  handleSubmit(val: UserCardInfo) {
    this.userCards.push(val);
    this.toggleFormVisibility();
  }
}
