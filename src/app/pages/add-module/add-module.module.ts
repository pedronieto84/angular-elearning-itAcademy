import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddModuleRoutingModule } from './add-module-routing.module';



@NgModule({
  declarations: [
    AddModuleComponent
  ],
  imports: [
    CommonModule,
    AddModuleRoutingModule
  ]
})
export class AddModuleModule { }
