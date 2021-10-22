import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddStudentPageRoutingModule } from './add-student-routing.module';

import { AddStudentPage } from './add-student.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStudentPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddStudentPage]
})
export class AddStudentPageModule {}
