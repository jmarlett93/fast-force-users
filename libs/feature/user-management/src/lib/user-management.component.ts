import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { UserManagementStore } from './user-management.component.store';
@Component({
    selector: 'crx-user-management',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        AsyncPipe,
        MatDividerModule,
        RouterModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatToolbarModule,
    ],
    templateUrl: './user-management.component.html',
    styleUrl: './user-management.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UserManagementStore],
})
export class UserManagementComponent {

    store = inject(UserManagementStore);

}
