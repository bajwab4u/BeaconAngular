import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';


const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient , private cookieService:CookieService ) { }

  

  signup(user){
    let body=JSON.stringify(user);
  let url="http://localhost:3000/signup";
  return this.http.post(url,body,httpOptions);
  }
  
  login(user){
    let body=JSON.stringify(user);
  let url="http://localhost:3000/login";
  return this.http.post(url,body,httpOptions);
  
  }

  logout(){
  let url="http://localhost:3000/logout";
  return this.http.get(url,httpOptions);
  }

  
  loggedIn(){
    return(this.cookieService.get('jwt'));  
    
  }

}
