import { Routes } from '@angular/router';
// ui
import { AppOneComponent } from './one/one.component';
import { AppSecondComponent } from './second/second.component';

export const RegistrationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/registration',
        pathMatch: 'full',
      },
      {
        path: 'one',
        component: AppOneComponent,
      },
      {
        path: 'second',
        component: AppSecondComponent,
      },
    ],
  },
];
