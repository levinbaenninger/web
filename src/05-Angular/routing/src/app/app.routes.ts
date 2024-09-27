import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { userRoutes } from './user/user.routes';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent, children: userRoutes },
  { path: '**', redirectTo: '/' }
];
