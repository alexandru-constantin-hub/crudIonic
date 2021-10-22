import { Component, OnInit, NgZone } from '@angular/core';
import { StudentService } from './../shared/student.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})

export class AddStudentPage implements OnInit {
  studentForm: FormGroup;

  constructor(
    private studentAPI: StudentService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.studentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      birthday: ['']
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.studentForm.valid) {
      return false;
    } else {
      this.studentAPI.addStudent(this.studentForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.studentForm.reset();
            this.router.navigate(['/']);
          })
        });
    }
  }
}