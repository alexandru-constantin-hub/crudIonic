import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { EditStudentPageRoutingModule } from './edit-student-routing.module';

import { EditStudentPage } from './edit-student.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditStudentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditStudentPage]
})
export class EditStudentPageModule {}
