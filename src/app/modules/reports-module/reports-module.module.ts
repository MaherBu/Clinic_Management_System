import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsModuleRoutingModule } from './reports-module-routing.module';
import { ReportsModuleComponent } from './reports-module.component';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { ComponentsModule } from '../components/components.module';
import { SafePipeModule } from 'safe-pipe';


@NgModule({
  declarations: [ReportsModuleComponent, ReportsHomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReportsModuleRoutingModule, 
  ]
})
export class ReportsModuleModule { }
