import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { usersActions } from '@crx/users/data-access';
import { Store } from '@ngrx/store';

@Component({
    standalone: true,
    imports: [RouterModule, MatToolbarModule, MatIconModule, AsyncPipe],
    selector: 'crx-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {

    activatedRoute = inject(ActivatedRoute);
    store = inject(Store);
    title = 'Fast Force Users Management App';

    constructor () {

        this.store.dispatch(usersActions.initUsers());

    }

}
