import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ResponseVidInt } from '../../models/response-vid-model';
import { UserCardInfo } from '../../models/user-card-info-model';
import { PageState } from '../state.model';

export interface YtVideosState {
  vids: ResponseVidInt[];
}

const ytVidsSelector = createFeatureSelector<YtVideosState>('ytVideos');

export const getYtVids = createSelector(
  ytVidsSelector,
  (state: YtVideosState) => state.vids
);
