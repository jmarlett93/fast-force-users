import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
describe('AppComponent', () => {

    async function setup (): Promise<void> {

        await render(AppComponent, {
            imports: [RouterModule.forRoot([]), StoreModule.forRoot({})],
        });

    }

    it(`should have as title 'Fast Force Users Management App'`, async () => {

        await setup();
        expect(screen.getByText('Fast Force Users Management App')).toBeTruthy();

    });

});
