import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;

  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  registerAssignment(classes: any) {
    return this._http.post<any>(this.env + 'classes/registerClasses', classes);
  }
  registerTeacher(teacher: any) {
    return this._http.post<any>(this.env + 'teacher/registerTeacher', teacher);
  }

  registerClassroom(classroom: any) {
    return this._http.post<any>(this.env + 'classroom/registerClassroom', classroom);
  }
  registerStudent(classroom: any) {
    return this._http.post<any>(this.env + 'student/registerStudent', classroom);
  }

  
  login(user: any) {
    return this._http.post<any>(this.env + 'user/login', user);
  }


}