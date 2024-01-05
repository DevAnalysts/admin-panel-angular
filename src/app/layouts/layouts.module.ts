import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FullComponent } from './full.component';

@NgModule({
  declarations: [FullComponent,HeaderComponent,SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    FullComponent,HeaderComponent,SidebarComponent
  ],
  providers:[]
})
export class LayoutsModule { }
