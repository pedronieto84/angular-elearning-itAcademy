import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoursesTableComponent } from './courses-table/courses-table.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
