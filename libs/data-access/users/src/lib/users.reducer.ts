import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState extends EntityState<UsersEntity> {
    selectedId?: string | number; // which Users record has been selected
    loaded: boolean; // has the Users list been loaded
    error?: string | null; // last known error (if any)
}

export interface UsersPartialState {
    readonly [USERS_FEATURE_KEY]: UsersState;
}

export const usersAdapter: EntityAdapter<UsersEntity> = createEntityAdapter<UsersEntity>();

export const initialUsersState: UsersState = usersAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});

const reducer = createReducer(
    initialUsersState,
    on(UsersActions.initUsers, (state) => ({ ...state, loaded: false, error: null })),
    on(UsersActions.loadUsersSuccess, (state, { users }) => usersAdapter.setAll(users, { ...state, loaded: true })),
    on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),
    on(UsersActions.setSelectedUser, (state, { id }) => ({ ...state, selectedId: id })),
    on(UsersActions.toggleFavorite, (state, { id }) => ({
        ...state,
        entities: {
            ...state.entities,
            [id]: { ...state.entities[id], favorite: state.entities[id]?.favorite === 'favorite' ? '' : 'favorite' },
        },
    })),
);

export function usersReducer (state: UsersState | undefined, action: Action) {

    return reducer(state, action);

}
