import { inject, Injectable } from '@angular/core';
import { usersActions, usersSelectors } from '@crx/users/data-access';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
@Injectable()
export class UserDetailStore extends ComponentStore<{}> {

    private readonly globalStore = inject(Store);

    constructor () {

        super();

    }

    readonly vm$ = this.select(this.globalStore.select(usersSelectors.selectEntity), (user) => ({ user }));
    readonly toggleFavorite = this.effect((id$: Observable<number>) =>
        id$.pipe(tap((id) => {

            this.globalStore.dispatch(usersActions.toggleFavorite({ id }));

        }),),);

}
