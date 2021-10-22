import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage
  },
  {
    path: 'add-course',
    loadChildren: () => import('./add-course/add-course.module').then( m => m.AddCoursePageModule)
  },
  {
    path: 'edit-course',
    loadChildren: () => import('./edit-course/edit-course.module').then( m => m.EditCoursePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
