import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import * as UsersActions from './users.actions';
import { UsersEffects } from './users.effects';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UsersService } from './users.service';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { HttpTestingController } from '@angular/common/http/testing';
describe('UsersEffects', () => {

    const setup = () => {

        let actions$ = new Observable<Action>();
        let userService: UsersService;
        let effects: UsersEffects;
        TestBed.configureTestingModule({
            providers: [
                UsersEffects,
                HttpTestingController,
                HttpClient,
                HttpHandler,
                provideMockActions(() => actions$),
                provideMockStore(),
            ],
        });
        effects = TestBed.inject(UsersEffects);
        userService = TestBed.inject(UsersService);
        actions$ = of(UsersActions.initUsers());
        return { effects, userService };

    };
    describe('init$', () => {

        it('should call and set actions on stream', async () => {

            const { effects, userService } = setup();
            userService.getUsers = jest.fn(() =>
                of([
                    {
                        id: 1,
                        name: 'foo',
                        username: '',
                        email: '',
                        address: {
                            street: '',
                            suite: '',
                            city: '',
                            zipcode: '',
                            geo: {
                                lat: '',
                                lng: '',
                            },
                        },
                        phone: '',
                        website: '',
                        company: {
                            name: '',
                            catchPhrase: '',
                            bs: '',
                        },
                    },
                ]),);
            const effectsSpy = subscribeSpyTo(effects.init$);

            expect(effectsSpy.getLastValue()).toEqual(UsersActions.loadUsersSuccess({
                users: [
                    {
                        id: 1,
                        name: 'foo',
                        username: '',
                        email: '',
                        address: {
                            street: '',
                            suite: '',
                            city: '',
                            zipcode: '',
                            geo: {
                                lat: '',
                                lng: '',
                            },
                        },
                        phone: '',
                        website: '',
                        company: {
                            name: '',
                            catchPhrase: '',
                            bs: '',
                        },
                    },
                ],
            }),);

        });

    });

});
