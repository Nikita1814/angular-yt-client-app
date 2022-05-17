import { Component, OnInit } from '@angular/core';
import { UserCardInfo } from '../../models/user-card-info-model';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
})
export class UserCardsComponent implements OnInit {
  formIsVisible: boolean;
  userCards: UserCardInfo[];
  constructor() {}

  ngOnInit(): void {
    this.formIsVisible = false;
    this.userCards = [];
  }
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
