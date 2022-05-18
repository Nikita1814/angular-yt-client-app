import { createReducer, on } from '@ngrx/store';
import { ResponseVidInt } from '../../models/response-vid-model';
import { updYtCardList } from '../actions/yt-search-action';

export interface YtVideosState {
  vids: ResponseVidInt[];
}

export const initialState: YtVideosState = {
  vids: [],
};

export const ytVideosReducer = createReducer(
  initialState,
  on(updYtCardList, (state, { videos }) => ({ ...state, vids: [...videos] }))
);
