import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { ReporterNavBarComponent } from './reporter-nav-bar/reporter-nav-bar.component';


@NgModule({
  declarations: [NavBarComponent, AdminNavBarComponent, ReporterNavBarComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    NavBarComponent,
    AdminNavBarComponent,
    ReporterNavBarComponent
  ]
})
export class ComponentsModule { }
