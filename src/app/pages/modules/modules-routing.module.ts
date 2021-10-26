import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopicsComponent } from '../topics/topics/topics.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ModulesComponent
      },
      {
        path: ':moduleId',
        component: TopicsComponent
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
export class ModulesRoutingModule { }
