import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddModuleRoutingModule } from './add-module-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [AddModuleComponent],
  imports: [CommonModule, AddModuleRoutingModule, MaterialModule],
})
export class AddModuleModule {}
