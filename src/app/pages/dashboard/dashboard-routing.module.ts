import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AppDashboardComponent

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
