import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rubberBand } from 'ng-animate';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('rubberBand', [transition('* => *', useAnimation(rubberBand))])
  ]
})
export class SignupComponent implements OnInit {
  
  constructor(private _auth:AuthService,private toastr: ToastrService,private router:Router,private pageTitle:Title) { }
  rubberBand:any;
  errorObj:any={
    name:'',
    email:'',
    password:'',
    category:''
  };
  
  ngOnInit(): void {
    this.pageTitle.setTitle('Register');
  }
  onSubmit(form:NgForm){
    this._auth.signup(form.value).subscribe(
      data => {console.log(data);
        this.toastr.success('Successfully Registered',);
        this.router.navigate(['login']);  
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



