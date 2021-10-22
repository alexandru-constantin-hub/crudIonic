import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addCourse(course: Course): Observable<any> {
    return this.http.post<Course>('http://mac.personaldevelopment.space/api/courses', course, this.httpOptions)
      .pipe(
        catchError(this.handleError<Course>('Add Course'))
      );
  }

  getCourse(id): Observable<Course[]> {
    return this.http.get<Course[]>('http://mac.personaldevelopment.space/api/courses/' + id)
      .pipe(
        tap(_ => console.log(`Course fetched: ${id}`)),
        catchError(this.handleError<Course[]>(`Get Course id=${id}`))
      );
  }

  getCourseList(): Observable<Course[]> {
    return this.http.get<Course[]>('http://mac.personaldevelopment.space/api/courses')
      .pipe(
        tap(courses => console.log('Courses fetched!')),
        catchError(this.handleError<Course[]>('Get Courses', []))
      );
  }

  updateCourse(id, course: Course): Observable<any> {
    return this.http.put('http://mac.personaldevelopment.space/api/courses/' + id, course, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Course updated: ${id}`)),
        catchError(this.handleError<Course[]>('Update Course'))
      );
  }

  deleteCourse(id): Observable<Course[]> {
    return this.http.delete<Course[]>('http://mac.personaldevelopment.space/api/courses/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Course deleted: ${id}`)),
        catchError(this.handleError<Course[]>('Delete Course'))
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