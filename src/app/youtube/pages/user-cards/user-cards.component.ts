import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserCardInfo } from '../../models/user-card-info-model';
import { getUserItems } from '../../redux/selectors/userCard.slelecotr';
import { PageState } from '../../redux/state.model';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
})
export class UserCardsComponent implements OnInit {
  formIsVisible: boolean;
  userCards: UserCardInfo[];
  userCards$: Observable<UserCardInfo[]>;
  constructor(private store: Store<PageState>) {}

  ngOnInit(): void {
    this.formIsVisible = false;
    this.userCards = [];
    this.userCards$ = this.store.select(getUserItems);
  }
  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
  addCard(card: UserCardInfo) {
    this.userCards.push(card);
  }
}
