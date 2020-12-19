import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { swing } from 'ng-animate';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('swing', [transition('* => *', useAnimation(swing))])
  ]
})
export class HeaderComponent implements OnInit {
  swing: any;
  constructor(private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

}
