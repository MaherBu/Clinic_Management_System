import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [AdminModuleComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AdminModuleRoutingModule
  ],
  exports:[
    AdminModuleComponent,
  ]
})
export class AdminModuleModule { }
