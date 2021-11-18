import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesTableComponent } from './courses-table/courses-table.component';

@NgModule({
  declarations: [CoursesComponent, CoursesTableComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CoursesModule {}
