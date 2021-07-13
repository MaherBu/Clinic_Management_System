import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicModuleRoutingModule } from './clinic-module-routing.module';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { ClinicModuleComponent } from './clinic-module.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { DataService } from 'src/app/services/data-service';


@NgModule({
  declarations: [ClinicDashboardComponent, ClinicModuleComponent, PatientsComponent, AddPatientsComponent],
  imports: [
    CommonModule,
    ClinicModuleRoutingModule,
    ComponentsModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports:[
    ClinicModuleComponent,
    MatTableModule
  ]
})
export class ClinicModuleModule { }
