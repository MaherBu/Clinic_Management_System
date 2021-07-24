import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { ReportsModuleComponent } from './reports-module.component';

const routes: Routes = [
  {
    path:'reports',
    component: ReportsModuleComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'app-reports-module',
      },
      {
        path: 'app-reports-module',
        component: ReportsHomeComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsModuleRoutingModule { }
