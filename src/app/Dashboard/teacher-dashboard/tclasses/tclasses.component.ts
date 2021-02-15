import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassService } from '../../../Services/class.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tclasses',
  templateUrl: './tclasses.component.html',
  styleUrls: ['./tclasses.component.css']
})
export class TClassesComponent implements OnInit {

  constructor(private _service:ClassService,private toastr: ToastrService,private router:Router,private pageTitle:Title) { }
  errorObj:any={
    name:'',
    email:'',
    password:'',
    category:''
  };
  ngOnInit(): void {
    this.pageTitle.setTitle('Create Class');
  }
  onSubmit(form:NgForm){
    this._service.createClass(form.value).subscribe(
      data => {console.log(data);
        this.toastr.success('Class Successfully Created',);
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
