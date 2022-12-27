import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import * as PusherPushNotifications from "@pusher/push-notifications-web";
declare var $: any;
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  ngOnInit() {
  // const beamsClient = new PusherPushNotifications.Client({
  //   instanceId: '89d9dacf-6301-4514-981b-ccd99c95f657',
  // });

  // beamsClient.start()
  //   .then(() => beamsClient.addDeviceInterest('hello'))
  //   .then(() => console.log('Successfully registered and subscribed!'))
  //   .catch(console.error);
  }


}
