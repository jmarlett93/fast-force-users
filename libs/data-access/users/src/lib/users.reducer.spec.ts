import { Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';
import { UsersState, initialUsersState, usersReducer } from './users.reducer';

describe('Users Reducer', () => {

    const createUsersEntity = (id: number, name = ''): Partial<UsersEntity> => ({
        id,
        name: name || `name-${id}`,
    });

    describe('valid Users actions', () => {

        it('loadUsersSuccess should return the list of known Users', () => {

            const users: Partial<UsersEntity>[] = [createUsersEntity(1234), createUsersEntity(5678)];
            const action = UsersActions.loadUsersSuccess({ users: users as UsersEntity[] });

            const result: UsersState = usersReducer(initialUsersState, action);

            expect(result.loaded).toBe(true);
            expect(result.ids.length).toBe(2);

        });

    });
    describe('setSelectedUser', () => {

        it('should set the selected user id', () => {

            const action = UsersActions.setSelectedUser({ id: 1 });
            const result: UsersState = usersReducer(initialUsersState, action);
            expect(result.selectedId).toBe(1);

        });

    });
    describe('toggleFavorite', () => {

        it('should toggle the favorite status of the user', () => {

            const action = UsersActions.toggleFavorite({ id: 1 });
            const result: UsersState = usersReducer(initialUsersState, action);
            expect(result.entities[1]?.favorite).toBe('favorite');

        });

    });

    describe('unknown action', () => {

        it('should return the previous state', () => {

            const action = {} as Action;

            const result = usersReducer(initialUsersState, action);

            expect(result).toBe(initialUsersState);

        });

    });

});
