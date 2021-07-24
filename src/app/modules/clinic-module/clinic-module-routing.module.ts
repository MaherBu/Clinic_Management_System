import { AddPatientsComponent } from './add-patients/add-patients.component';
import { PatientsComponent } from './patients/patients.component';
import { ClinicModuleComponent } from './clinic-module.component';
import { ClinicDashboardComponent } from './clinic-dashboard/clinic-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsComponent } from './patient-details-dialog/patient-details.component';

const routes: Routes = [
  {
    path:'clinic',
    component: ClinicModuleComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: ClinicDashboardComponent
      },
      {
        path: 'patients',
        component: PatientsComponent
      },
      {
        path: 'patient-details',
        component: PatientDetailsComponent,
        data : {row : 'row'}
      },
      {
        path: 'add-patients',
        component: AddPatientsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicModuleRoutingModule { }
