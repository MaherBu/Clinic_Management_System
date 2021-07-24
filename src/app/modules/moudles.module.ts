import { ComponentsModule } from './components/components.module';
import { ClinicModuleModule } from './clinic-module/clinic-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoudlesRoutingModule } from './moudles-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AuthModule } from './auth/auth.module';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkTableModule } from '@angular/cdk/table';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { FormsModule } from '@angular/forms';
import { ReportsModuleModule } from './reports-module/reports-module.module';
import { SafePipeModule } from 'safe-pipe';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MoudlesRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    CdkTableModule,
    MatTableModule,
    MatFormFieldModule,
    AuthModule,
    ClinicModuleModule,
    AdminModuleModule,
    ReportsModuleModule,
    ComponentsModule,
    FormsModule,
    SafePipeModule
  ],
  exports: [
    HomePageComponent,
    FormsModule
  ], 
})
export class MoudlesModule { }
