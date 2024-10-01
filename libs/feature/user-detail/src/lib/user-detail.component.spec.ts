import { UserDetailComponent } from './user-detail.component';
import { UserDetailStore } from './user-detail.component.store';

import { render, screen } from '@testing-library/angular';
import { createSpyFromClass } from 'jest-auto-spies';
import { UsersEntity } from '@crx/users/data-access';
describe('UserDetailComponent', () => {

    const user: UsersEntity = {
        id: 1,
        name: 'Test Name',
        username: '',
        email: 'test@test.com',
        address: {
            street: 'street',
            suite: 'suite',
            city: 'city',
            zipcode: '456567',
            geo: {
                lat: '',
                lng: '',
            },
        },
        phone: '234-123-1233',
        website: 'test.com',
        company: {
            name: 'test company',
            catchPhrase: 'test catch phrase',
            bs: 'test bs',
        },
    };

    async function setup (vm: { user: UsersEntity }) {

        const componentStore = createSpyFromClass(UserDetailStore, {
            observablePropsToSpyOn: ['vm$'],
            methodsToSpyOn: ['toggleFavorite'],
        });

        componentStore.vm$.nextWith(vm);
        const result = await render(UserDetailComponent, {
            componentProviders: [
                {
                    provide: UserDetailStore,
                    useValue: componentStore,
                },
            ],
        });
        const { fixture } = result;
        return { componentStore, component: fixture.componentInstance };

    }

    it('should display user name', async () => {

        await setup({ user });
        expect(screen.getByText('Test Name')).toBeTruthy();

    });
    it('should display show filled heart if user is favorite', async () => {

        const favoriteUser = { ...user, favorite: 'favorite' };
        await setup({ user: favoriteUser });
        expect(screen.getByTestId('favorite-icon').classList).toContain('mat-primary');

    });

});
