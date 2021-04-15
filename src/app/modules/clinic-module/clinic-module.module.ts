import { ComponentsModule } from './../components/components.module';
import { NavBarComponent } from './../components/nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicModuleRoutingModule } from './clinic-module-routing.module';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { ClinicModuleComponent } from './clinic-module.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';


@NgModule({
  declarations: [ClinicDashboardComponent, ClinicModuleComponent, PatientsComponent, AddPatientsComponent],
  imports: [
    CommonModule,
    ClinicModuleRoutingModule,
    ComponentsModule
  ],
  exports:[
    ClinicModuleComponent
  ]
})
export class ClinicModuleModule { }
