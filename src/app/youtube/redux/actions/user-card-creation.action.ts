import { createAction, props } from '@ngrx/store';
import { UserCardInfo } from '../../models/user-card-info-model';

export const addUserCard = createAction(
  '[User Cards Page] Card Creation',
  props<{userCard: UserCardInfo }>()
);


