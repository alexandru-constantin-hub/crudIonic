import { Component, OnInit } from '@angular/core';
import { CourseService } from './../shared/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: 'courses.page.html',
  styleUrls: ['courses.page.scss'],
})

export class CoursesPage implements OnInit {
  Course: any = [];

  constructor(
    private courseService: CourseService
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.courseService.getCourseList().subscribe((res) => {
      console.log(res)
      this.Course = res;
    })
  }

  deleteCourse(course, i) {
    if (window.confirm('Do you want to delete course?')) {
      this.courseService.deleteCourse(course.id)
        .subscribe(() => {
          this.Course.splice(i, 1);
          console.log('Course deleted!')
        }
        )
    }
  }
}