import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminModuleComponent,
    children:[
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
