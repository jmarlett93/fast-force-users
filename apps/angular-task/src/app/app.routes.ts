import { Route } from '@angular/router';
import { UserManagementComponent } from '@angular-task/user-management';
import { UserDetailComponent } from '@angular-task/user-detail';
export const appRoutes: Route[] = [
    {
        title: 'Dashboard',
        path: 'dashboard',
        component: UserManagementComponent,
        data: { title: 'Dashboard', icon: 'home' },
    },
    {
        title: 'User Details',
        path: 'user/:id',
        component: UserDetailComponent,
        data: { title: 'User Details', icon: 'person' },
    },
    { path: '**', redirectTo: 'dashboard' },
];
