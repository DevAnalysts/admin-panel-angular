import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppOneComponent } from './one.component';

@NgModule({
  declarations: [AppOneComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: AppOneComponent
    }])

  ]
})
export class OneModule { }
