import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-user-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './user-dashboard.component.html',
    styleUrl: './user-dashboard.component.scss',
 //   providers: [UserManagementStore],
})
export class UserDashboardComponent {}
