import { Component, OnInit , DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassService } from '../../../Services/class.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from './../../../Services/profile.service';

@Component({
  selector: 'app-tclasses',
  templateUrl: './tclasses.component.html',
  styleUrls: ['./tclasses.component.css']
})
export class TClassesComponent implements OnInit , DoCheck {

  constructor(private _service:ClassService,private toastr: ToastrService,private router:Router,private pageTitle:Title,private profileService:ProfileService) { }
  errorObj:any={
    name:'',
    description:'',
    id:''
  };
  email;
  mydata:any ={
    name:'',
    teacher:''
  };
  ngOnInit(): void {
    this.pageTitle.setTitle('Create Class');
    
    this.profileService.getusername().subscribe(data=>{
      this.email = data["email"];
      },
      err=>{
        this.router.navigate['login'];
      })
    this._service.teacherClasses("teacher@teacher.com").subscribe(data=>{
      this.mydata = data;
      console.log(data);
    }
    )
      
  };
  
  ngDoCheck(): void {
    console.log("Do Check called")
  }
  
  onSubmit(form:NgForm){
    form.value["email"]=this.email;
    this._service.createClass(form.value).subscribe(
      data => {console.log(data);
        this.toastr.success('Class Successfully Created',);
        console.log(form.value);
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
