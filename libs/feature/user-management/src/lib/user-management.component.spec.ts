import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserManagementComponent } from './user-management.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AsyncPipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { UserManagementStore } from './user-management.component.store';
describe('UserManagementComponent', () => {

    let component: UserManagementComponent;
    let fixture: ComponentFixture<UserManagementComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [
                UserManagementComponent,
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
                StoreModule.forRoot({}),
            ],
            providers: [UserManagementStore],
        }).compileComponents();

        fixture = TestBed.createComponent(UserManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
