import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const userRoutes: Routes = [
  { path: '', redirectTo: 'detail', pathMatch: 'full' },
  { path: 'detail', component: UserDetailComponent },
  { path: 'edit', component: UserEditComponent }
];
