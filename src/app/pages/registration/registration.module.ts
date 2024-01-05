import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// icons
import { RegistrationRoutes } from './registration.routing';
// ui components
import { AppOneComponent } from './one/one.component';
import { AppSecondComponent } from './second/second.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegistrationRoutes),
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [
    AppOneComponent,
    AppSecondComponent
  ],
})
export class RegistrationModule { }
