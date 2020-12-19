import { ProfileService } from './../../Services/profile.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $:any;

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  
  constructor(private profileService:ProfileService, private router:Router , private authService:AuthService,private pageTitle:Title) { }
   username;
   
  ngOnInit(): void {
    this.pageTitle.setTitle('Dashboard');
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
     this.profileService.getusername().subscribe(data=>{
       this.username = data['name'];
       if(data['category']!="Student"){
         this.router.navigate(['/login']);
       }
     },
     err=>{this.router.navigate(['/login']);}
     )
  }
  onClick(){
    this.authService.logout().subscribe(
      data=>{this.router.navigate(['login'])},
      err=>{}
    );
  }

  userData:any={
    name:"",
    email:"",
    password:""
  }

 

}

