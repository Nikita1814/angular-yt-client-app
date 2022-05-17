import { createReducer, on } from '@ngrx/store';
import { UserCardInfo } from '../../models/user-card-info-model';
import { addUserCard } from '../actions/user-card-creation.action';

export interface UserCardsState {
  userCards: UserCardInfo[]
}

export const initialState : UserCardsState = {
  userCards:[]
}

export const userCardsReducer = createReducer(
  initialState,
  on(addUserCard, (state, { userCard }) => ({ userCards:[...state.userCards, userCard ]}))
);
