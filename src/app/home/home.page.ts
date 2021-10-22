import { Component, OnInit } from '@angular/core';
import { StudentService } from './../shared/student.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Students: any = [];

  constructor(
    private studentService: StudentService
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.studentService.getStudentList().subscribe((res) => {
      console.log(res)
      this.Students = res;
    })
  }

  deleteStudent(student, i) {
    if (window.confirm('Do you want to delete student?')) {
      this.studentService.deleteStudent(student._id)
        .subscribe(() => {
          this.Students.splice(i, 1);
          console.log('Student deleted!')
        }
        )
    }
  }

  //Dark theme

   onClick(event){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }
}