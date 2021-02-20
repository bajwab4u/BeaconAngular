import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  createClass(info){
    let body=JSON.stringify(info);
    let url="http://localhost:3000/teacher/class";
    return this.http.post(url,body,httpOptions);
  }

  joinClass(info){
    let body=JSON.stringify(info);
    let url="http://localhost:3000/student/class";
    return this.http.put(url,body,httpOptions);
  }

  teacherClasses(info){
    let url="http://localhost:3000/teacher/class/"+info;
    return this.http.get(url,httpOptions);
  }

  studentClasses(info){
    let url="http://localhost:3000/student/class/"+info;
    return this.http.get(url,httpOptions);
  }

}
