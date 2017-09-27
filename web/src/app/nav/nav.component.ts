import { Component } from '@angular/core';

import { Config } from '../config';

@Component({
  selector: 'nb-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css' ]
})
export class NavComponent {
  slack = Config.JOIN_SLACK_URL;
  meetup = Config.MEETUP_URL;
}