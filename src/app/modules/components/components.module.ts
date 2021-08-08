import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';
import { ReporterNavBarComponent } from './reporter-nav-bar/reporter-nav-bar.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';


@NgModule({
  declarations: [NavBarComponent, AdminNavBarComponent, ReporterNavBarComponent, SuccessDialogComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports:[
    NavBarComponent,
    AdminNavBarComponent,
    ReporterNavBarComponent
  ],
  entryComponents: [
    SuccessDialogComponent
  ]
})
export class ComponentsModule { }
