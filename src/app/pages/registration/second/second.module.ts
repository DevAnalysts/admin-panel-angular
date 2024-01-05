import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppSecondComponent } from './second.component';


@NgModule({
  declarations: [AppSecondComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: AppSecondComponent
    }])

  ]
})
export class SecondModule { }
