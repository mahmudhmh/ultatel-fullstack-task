import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, {
      headers: this.authService.getHeaders(),
    });
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, student, {
      headers: this.authService.getHeaders(),
    });
  }

  updateStudent(student: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${student.id}`, student, {
      headers: this.authService.getHeaders(),
    });
  }

  deleteStudent(studentId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${studentId}`, {
      headers: this.authService.getHeaders(),
    });
  }
}
