import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flash } from 'ng-animate';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
  animations: [
    trigger('flash', [transition('* => *', useAnimation(flash))])
  ]
})
export class LandingpageComponent implements OnInit {
  flash: any;
  constructor() { }

  ngOnInit(): void {
      window.watsonAssistantChatOptions = {
      integrationID: "1427d45d-3a1f-41a8-ac74-d7652eeba75d", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "cf1f85c6-022f-4ea3-a37b-29012e12ec59", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
    setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
   });
  }

}
