import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminModuleComponent } from './admin-module.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { MedicalCentersComponent } from './medical-centers/medical-centers.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminModuleComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'app-admin-dashboard',
      },
      {
        path: 'app-admin-dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'add-doctor',
        component: AddDoctorComponent
      },
      {
        path: 'view-doctors',
        component: ViewDoctorsComponent
      },
      {
        path: 'medical-centers',
        component: MedicalCentersComponent
      },
      {
        path: 'disease',
        component: DiseasesComponent
      },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
