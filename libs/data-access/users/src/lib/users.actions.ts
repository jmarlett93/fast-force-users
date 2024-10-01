import { createAction, props } from '@ngrx/store';
import { UsersEntity } from './users.models';

export const initUsers = createAction('[Users Page] Init');

export const loadUsersSuccess = createAction('[Users/API] Load Users Success', props<{ users: UsersEntity[] }>());

export const loadUsersFailure = createAction('[Users/API] Load Users Failure', props<{ error: string }>());

export const setSelectedUser = createAction('[Users] Set Selected User', props<{ id: number }>());

export const toggleFavorite = createAction('[Users] Toggle Favorite', props<{ id: number }>());
