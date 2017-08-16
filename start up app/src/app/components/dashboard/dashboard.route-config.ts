import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent
];
