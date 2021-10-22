import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab-bar/tab-bar.module').then(m => m.TabBarPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'add-student',
    loadChildren: () => import('./add-student/add-student.module').then( m => m.AddStudentPageModule)
  },
  {
    path: 'edit-student/:id',
    loadChildren: () => import('./edit-student/edit-student.module').then( m => m.EditStudentPageModule)
  },
  {
    path: 'add-course',
    loadChildren: () => import('./courses/add-course/add-course.module').then( m => m.AddCoursePageModule)
  },
  {
    path: 'edit-course/:id',
    loadChildren: () => import('./courses/edit-course/edit-course.module').then( m => m.EditCoursePageModule)
  },
  // {
  //   path: 'students',
  //   loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
  // },
  // {
  //   path: 'courses',
  //   loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  // },
  // {
  //   path: 'tab-bar',
  //   loadChildren: () => import('./tab-bar/tab-bar.module').then( m => m.TabBarPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
