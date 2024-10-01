import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './users.models';
@Injectable({
    providedIn: 'root',
})
export class UsersService {

    readonly http = inject(HttpClient);

    readonly usersUrl = 'https://jsonplaceholder.typicode.com/users';

    getUsers = () => this.http.get<User[]>(this.usersUrl);

}
