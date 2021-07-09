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
    ComponentsModule
  ],
  exports: [
    HomePageComponent,
  ], 
})
export class MoudlesModule { }
