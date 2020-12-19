import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rubberBand } from 'ng-animate';
import {Router} from '@angular/router';
import { AuthService } from '../../auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))])
  ]
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService,private router:Router , private pageTitle:Title) { }

  rubberBand: any;
  errorObj:any={
    email:'',
    password:''
  };
  ngOnInit(): void {
    this.pageTitle.setTitle('Login');
  
  
  }

  onSubmit(form:NgForm){
    this._auth.login(form.value).subscribe(
      data => {
      if(data['category'] == "Teacher"){
        this.router.navigate(['/teacherDashboard']); 
        
      }else{
        this.router.navigate(['/studentDashboard']);  
        
      }
      },
      err => {
        this.errorObj = err.error;
        setTimeout(() => {
          this.errorObj = "";
        }, 3000);
      }      
    )
  };

}
