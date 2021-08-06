import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [LoginComponent, LoginAdminComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSnackBarModule,
    BrowserModule,
    FormsModule
  ]
})
export class AuthModule { }
