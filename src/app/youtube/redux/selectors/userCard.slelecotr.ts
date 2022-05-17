import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserCardInfo } from '../../models/user-card-info-model';
import { PageState } from '../state.model';

export interface UserItemsState {
  userCards: UserCardInfo[];
}

const userCardSelector = createFeatureSelector<UserItemsState>('userItems');

export const getUserItems = createSelector(
  userCardSelector,
  (state: UserItemsState) => state.userCards
);
