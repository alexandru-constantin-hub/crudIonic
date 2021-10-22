import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addStudent(student: Student): Observable<any> {
    return this.http.post<Student>('http://mac.personaldevelopment.space/api/students', student, this.httpOptions)
      .pipe(
        catchError(this.handleError<Student>('Add Student'))
      );
  }

  getStudent(id): Observable<Student[]> {
    return this.http.get<Student[]>('http://mac.personaldevelopment.space/api/students/' + id)
      .pipe(
        tap(_ => console.log(`Student fetched: ${id}`)),
        catchError(this.handleError<Student[]>(`Get Student id=${id}`))
      );
  }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>('http://mac.personaldevelopment.space/api/students')
      .pipe(
        tap(students => console.log('Students fetched!')),
        catchError(this.handleError<Student[]>('Get Student', []))
      );
  }

  updateStudent(id, student: Student): Observable<any> {
    return this.http.put('http://mac.personaldevelopment.space/api/students/' + id, student, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Student updated: ${id}`)),
        catchError(this.handleError<Student[]>('Update Student'))
      );
  }

  deleteStudent(id): Observable<Student[]> {
    return this.http.delete<Student[]>('http://mac.personaldevelopment.space/api/students/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Student deleted: ${id}`)),
        catchError(this.handleError<Student[]>('Delete Student'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}