import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailStore } from './user-detail.component.store';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
describe('UserDetailComponent', () => {

    let component: UserDetailComponent;
    let fixture: ComponentFixture<UserDetailComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({
            imports: [
                UserDetailComponent,
                CommonModule,
                MatTabsModule,
                MatButtonModule,
                MatIconModule,
                MatGridListModule,
                RouterModule,
                StoreModule.forRoot({}),
            ],
            providers: [UserDetailStore],
        }).compileComponents();

        fixture = TestBed.createComponent(UserDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {

        expect(component).toBeTruthy();

    });

});
