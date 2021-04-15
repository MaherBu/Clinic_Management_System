import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      { path: '', component: HomePageComponent },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
      // { path: 'team', component: TeamComponent },
      // { path: 'clients', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoudlesRoutingModule { }