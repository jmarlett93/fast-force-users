import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { UserDetailStore } from './user-detail.component.store';

@Component({
    selector: 'crx-user-detail',
    standalone: true,
    imports: [CommonModule, AsyncPipe, MatTabsModule, MatButtonModule, MatIconModule, MatGridListModule, RouterModule],
    templateUrl: './user-detail.component.html',
    styleUrl: './user-detail.component.scss',
    providers: [UserDetailStore],
})
export class UserDetailComponent {

    readonly store = inject(UserDetailStore);
    readonly vm$ = this.store.vm$;

}
