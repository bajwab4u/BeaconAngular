import { Router } from '@angular/router';
import { ProfileService } from './../../../Services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tprofile',
  templateUrl: './tprofile.component.html',
  styleUrls: ['./tprofile.component.css']
})
export class TProfileComponent implements OnInit {
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
