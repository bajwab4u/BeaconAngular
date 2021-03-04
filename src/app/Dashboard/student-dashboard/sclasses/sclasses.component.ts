import { Component, OnInit ,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClassService } from '../../../Services/class.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from './../../../Services/profile.service';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { ZoomMtg } from '@zoomus/websdk';
ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();


@Component({
  selector: 'app-sclasses',
  templateUrl: './sclasses.component.html',
  styleUrls: ['./sclasses.component.css']
})
export class SClassesComponent implements OnInit {
  signatureEndpoint = 'http://localhost:4000'
  apiKey = 'CzGxvPspTtSdKbIXVOmdLQ'
  meetingNumber = ''
  role = 0
  leaveUrl = 'http://localhost:4200/studentDashboard/class'
  userName = ''
  userEmail = 'bajwab4u@gmail.com'
  passWord = ''

  

constructor(private _service:ClassService,private toastr: ToastrService,private router:Router,private pageTitle:Title,private profileService:ProfileService,public httpClient: HttpClient, @Inject(DOCUMENT) document) { }
  
  errorObj:any={
    name:'',
    description:'',
    id:''
  };

  email;

  mydata:any ={
  name:'',
  teacher:'',
  students:[]
   };

  ngOnInit(): void {
    this.pageTitle.setTitle('Join Class');
    
    this.profileService.getusername().subscribe(data=>{
      this.userName = data["name"];
      this.userEmail = data["email"];
      this.email = data["email"];
      this._service.studentClasses(this.email).subscribe(data=>{
        this.mydata = data;
        console.log(data);
      })
      },
      err=>{
        this.router.navigate['login'];
      })
    
      
  };
  getSignature() {
    this.httpClient.post(this.signatureEndpoint, {
	    meetingNumber: this.meetingNumber,
	    role: this.role
    }).toPromise().then((data: any) => {
      if(data.signature) {
        console.log(data.signature)
        this.startMeeting(data.signature)
      } else {
        console.log(data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }
  startMeeting(signature) {
    document.getElementById('zmmtg-root').style.display = 'block'
    ZoomMtg.init({
      leaveUrl: this.leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success)

        ZoomMtg.join({
          signature: signature,
          meetingNumber: this.meetingNumber,
          userName: this.userName,
          apiKey: this.apiKey,
          userEmail: this.userEmail,
          passWord: this.passWord,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    form.value["email"]=this.email;
    this._service.joinClass(form.value).subscribe(
      data => {console.log(data);
        this.toastr.success('Successfully ! Joined',);
        console.log(form.value);
        this._service.studentClasses(this.email).subscribe(data=>{
          this.mydata = data;
          console.log(data);
        })
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

