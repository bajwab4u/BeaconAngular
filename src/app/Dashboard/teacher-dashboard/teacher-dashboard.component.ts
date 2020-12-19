import { ProfileService } from './../../Services/profile.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $:any;

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

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
      if(data['category']!="Teacher"){
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
  

 

}
