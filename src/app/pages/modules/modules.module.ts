import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { ModulesComponent } from './modules/modules.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesTableComponent } from './modules-table/modules-table.component';



@NgModule({
  declarations: [
    ModulesComponent,
    ModulesTableComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ]
})
export class ModulesModule { }
