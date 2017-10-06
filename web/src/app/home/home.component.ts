import { Component } from '@angular/core';

import { Config } from '../config';

@Component({
  selector: 'nb-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent {
  slack = Config.JOIN_SLACK_URL;
  meetup = Config.MEETUP_URL;
}