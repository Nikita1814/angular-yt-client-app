import { createAction, props } from '@ngrx/store';
import { ResponseVidInt } from '../../models/response-vid-model';

export const updYtCardList = createAction(
  '[Search Results Page] Yt Search',
  props<{ videos: ResponseVidInt[] }>()
);
