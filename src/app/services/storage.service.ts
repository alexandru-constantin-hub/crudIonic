import { Injectable } from '@angular/core';

export interface Student {
  id: number,
  firstName: string,
  lastName: string,
  birthDay: date
}

export interface Course {
  id: number,
  name: string,
  duration: number
}

const STUDENTS_KEY = 'students'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  //Student

  //Create Student
  addStudent(student: Student): Promise<any> {
    return this.storage.get(STUDENTS_KEY).then((students: Student[])=>{
      if(students) {
        students.push(student);
        return this.storage.set(STUDENTS_KEY, students);
      } else {
        return this.storage.set(STUDENTS_KEY, [student]);
      }
    });
  }

  //Read Student
  getItems():Promise<Student[]> {
    return this.storage.get(STUDENTS_KEY)
  }

  //Update Student
  updateStudent(student: Student): Promise<any> {
    return this.storage.get(STUDENTS_KEY).then((students: Student[])=>{
      if(students || students.length === 0) {
        return null;
      } 
        let newStudents: Student[] = [];
        for (let i of students) {
          if(i.id === item.id) {
            newStudents.push(student)
          } else {
            newStudents.push(i);
          }
        }

        return this.storage.set(STUDENTS_KEY, newStudents);
      
    });
  }

  //Delete Students
  deleteStudent(id: number): Promise<Student> {
     return this.storage.get(STUDENTS_KEY).then((students: Student[])=>{
      if(students || students.length === 0) {
        return null;
      } 
      let toKeep: Student[] = [];
        for (let i of students) {
          if(i.id !== item.id) {
            toKeep.push(i);
          } 
        }

        return this.storage.set(STUDENTS_KEY, toKeep);
      
    });
  }


  //Course

  //Create Course
  addStudent(course: Course): Promise<any> {

  }

  //Read Courses
  getItems() {

  }

  //Update Course
  updateStudent(student: Student) {

  }

  //Delete Course
  deleteStudent(id: number) {

  }




}
