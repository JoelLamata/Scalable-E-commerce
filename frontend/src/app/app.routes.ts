import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { Orders } from './components/orders/orders';

export const routes: Routes = [
  { path: 'users', component: Users },
  { path: 'orders', component: Orders },
  { path: '', redirectTo: 'users', pathMatch: 'full'},
];
