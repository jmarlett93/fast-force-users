import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import * as UsersActions from './users.actions';
import { User } from './users.models';
import { UsersService } from './users.service';
import { selectRouteParam } from './users.selectors';
@Injectable()
export class UsersEffects {

    service = inject(UsersService);
    actions$ = inject(Actions);
    store = inject(Store);

    init$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UsersActions.initUsers),
            switchMap(() =>
                this.service.getUsers().pipe(
                    map((users: User[]) => UsersActions.loadUsersSuccess({ users })),
                    catchError((error) => {

                        console.error('Error', error);
                        return of(UsersActions.loadUsersFailure({ error }));

                    }),
                ),),
        ),);

    selectedUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATION),
            mergeMap(() => this.store.pipe(select(selectRouteParam('id')))),
            map((id) => UsersActions.setSelectedUser({ id: +(id || 0) })),
        ),);

}
