import { inject, Injectable } from '@angular/core';
import { UsersEntity, usersSelectors } from '@crx/users/data-access';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { debounceTime, tap, withLatestFrom } from 'rxjs/operators';

interface UserManagementState {
    search: string;
}
interface UserManagementVm {
    users: UsersEntity[];
    search: string;
}

const searchAlgorithm = (search: string, users: UsersEntity[]) =>
    users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
            || user.email.toLowerCase().includes(search.toLowerCase())
            || user.phone.toLowerCase().includes(search.toLowerCase())
            || user.company?.catchPhrase.toLowerCase().includes(search.toLowerCase())
            || user.favorite?.toLowerCase().includes(search.toLowerCase()),);

@Injectable()
export class UserManagementStore extends ComponentStore<UserManagementState> {

    private readonly globalStore = inject(Store);

    readonly search = this.select((state) => state.search);

    readonly filteredUsers = this.search.pipe(
        withLatestFrom(this.globalStore.select(usersSelectors.selectAllUsers)),
        map(([search, users]) => searchAlgorithm(search.toLowerCase(), users)),
    );

    constructor () {

        super({ search: '' });

    }

    readonly vm$: Observable<UserManagementVm> = this.select(this.filteredUsers, this.search, (users, search) => ({
        users,
        search,
    }));

    readonly searchChange = this.effect((trigger$: Observable<string>) =>
        trigger$.pipe(
            debounceTime(1000),
            tap((search) => this.patchState({ search })),
        ),);

}
