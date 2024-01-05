import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full.component';
import { AppDashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'registration',
        loadChildren: () =>
          import('./pages/registration/registration.module').then(
            (m) => m.RegistrationModule
          ),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },

  {
    path: 'authentication',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}






// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { BlankComponent } from './layouts/blank/blank.component';


// const routes: Routes = [

//       {
//         path: '',

//         loadChildren: () =>
//           import('./pages/dashboard/dashboard.module')
//             .then(m => m.DashboardModule)
//       },

//       {
//         path: 'registration',
//         loadChildren: () =>
//           import('./pages/registration/registration.module').then(
//             (m) => m.RegistrationModule
//           ),
//       },

//       {
//         path: 'ui-components',
//         loadChildren: () =>
//           import('./pages/ui-components/ui-components.module').then(
//             (m) => m.UicomponentsModule
//           ),
//       },
//       {
//         path: 'extra',
//         loadChildren: () =>
//           import('./pages/extra/extra.module').then((m) => m.ExtraModule),
//       },

//   {
//     path: 'authentication',
//     component: BlankComponent,
//     children: [
//       {
//         path: '',
//         loadChildren: () =>
//           import('./pages/authentication/authentication.module').then(
//             (m) => m.AuthenticationModule
//           ),
//       },
//     ],
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}


