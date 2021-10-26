import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./pages/modules/modules.module').then( m => m.ModulesModule )
  },
  {
    path: 'topics',
    loadChildren: () => import('./pages/topics/topics.module').then( m => m.TopicsModule )
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/users' //Por el momento hacemos redirect, podríamos poner una página de error 404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
