import { Action, ActionReducer } from '@ngrx/store';
import { UserCardsState } from './reducers/UserCards.reducer';
import { YtVideosState } from './reducers/ytVideos.reducer';

export interface PageState {
  ytVideos: ActionReducer<YtVideosState, Action>;
  userItems: ActionReducer<UserCardsState, Action>;
}
