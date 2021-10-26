import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesComponent } from './modules/modules.component';
import { ModulesRoutingModule } from './modules-routing.module';



@NgModule({
  declarations: [
    ModulesComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
