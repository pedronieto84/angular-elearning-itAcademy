import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { ModulesComponent } from '../modules/modules/modules.component';
import { TopicsComponent } from '../topics/topics/topics.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: ':courseId',
        component: ModulesComponent
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesRoutingModule { }
