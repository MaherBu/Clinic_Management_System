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
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PatientDetailsComponent } from './patient-details-dialog/patient-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { AddVisitDialogComponent } from './add-visit-dialog/add-visit-dialog.component';
import { AddSurgeryVisitDialogComponent } from './add-surgery-visit-dialog/add-surgery-visit-dialog.component';


@NgModule({
  declarations: [ClinicDashboardComponent, ClinicModuleComponent, PatientsComponent, AddPatientsComponent, PatientDetailsComponent, AddVisitDialogComponent, AddSurgeryVisitDialogComponent],
  imports: [
    CommonModule,
    ClinicModuleRoutingModule,
    ComponentsModule,
    ChartsModule,
    MatTableModule,
    MatCardModule,
    FormsModule,      
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDividerModule
  ],
  exports:[
    ClinicModuleComponent,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatDividerModule
  ],
  entryComponents:[
    PatientDetailsComponent,
    AddVisitDialogComponent,
    AddSurgeryVisitDialogComponent
  ]
})
export class ClinicModuleModule { }
