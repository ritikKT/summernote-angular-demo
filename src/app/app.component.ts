import { ApplicationRef, Component, ElementRef, Injector } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LanguageService } from './language/language.service';
import { Direction } from '@angular/cdk/bidi';
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import Pusher from 'pusher-js';
declare var $: any;
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: LanguageService, private applicationRef: ApplicationRef, private injector: Injector) { }
  ngOnInit() {
    var pusher = new Pusher('c42effe9f372fa675e24', {
      cluster: 'ap2'
    });
    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data: any) {
      alert(JSON.stringify(data));
    });
  //   const beamsClient = new PusherPushNotifications.Client({
  //   instanceId: '89d9dacf-6301-4514-981b-ccd99c95f657',
  // });

  // beamsClient.start()
  //   .then(() => beamsClient.addDeviceInterest('hello'))
  //   .then(() => console.log('Successfully registered and subscribed!'))
  //   .catch(console.error);
    
  }

}
