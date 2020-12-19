import { Router } from '@angular/router';
import { ProfileService } from './../../../Services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprofile',
  templateUrl: './sprofile.component.html',
  styleUrls: ['./sprofile.component.css']
})
export class SProfileComponent implements OnInit {
  user={
    name:'',
    email:''
    
  }
  constructor(private profileService:ProfileService, private router:Router) { }
  
  ngOnInit(): void {
    this.profileService.getusername().subscribe(data=>{
      this.user['name'] = data['name'];
      this.user['email'] = data['email'];
      },
      err=>{
        this.router.navigate['login'];
      })
  }

}
