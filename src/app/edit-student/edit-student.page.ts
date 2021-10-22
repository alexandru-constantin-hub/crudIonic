import { Component, OnInit } from '@angular/core';
import { StudentService } from './../shared/student.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {

  updateStudentForm: FormGroup;
  id: any;

  constructor(
    private studentAPI: StudentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getStudentData(this.id);
    this.updateStudentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      birthday: ['']
    })
  }

  getStudentData(id) {
    this.studentAPI.getStudent(id).subscribe(res => {
      this.updateStudentForm.setValue({
        firstName: res['firstName'],
        lastName: res['firstName'],
        birthday: res['birthday'],
      });
    });
  }

  updateForm() {
    if (!this.updateStudentForm.valid) {
      return false;
    } else {
      this.studentAPI.updateStudent(this.id, this.updateStudentForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updateStudentForm.reset();
          this.router.navigate(['/']);
        })
    }
  }

}