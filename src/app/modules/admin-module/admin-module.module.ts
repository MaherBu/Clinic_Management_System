import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { ComponentsModule } from '../components/components.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { MedicalCentersComponent } from './medical-centers/medical-centers.component';
import { ChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DiseasesComponent } from './diseases/diseases.component';
import { AddDiseaseDialogComponent } from './add-disease-dialog/add-disease-dialog.component';
import { AddDiseaseSyndromesComponent } from './add-disease-syndromes/add-disease-syndromes.component';
import { DiseaseDetailsDialogComponent } from './disease-details-dialog/disease-details-dialog.component';
import { AddDoctorComponent } from './add-doctor-dialog/add-doctor.component';
import { AddClinicDialogComponent } from './add-clinic-dialog/add-clinic-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [AdminModuleComponent, AdminDashboardComponent, AddDoctorComponent, ViewDoctorsComponent, MedicalCentersComponent, DiseasesComponent, AddDiseaseDialogComponent, AddDiseaseSyndromesComponent, DiseaseDetailsDialogComponent, AddClinicDialogComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ChartsModule,
    AdminModuleRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatDialogModule 
  ],
  exports: [
    AdminModuleComponent,
    MatTableModule
  ],
  entryComponents: [
    DiseaseDetailsDialogComponent,
    AddDoctorComponent,
    AddClinicDialogComponent,
  ]
})
export class AdminModuleModule { }
