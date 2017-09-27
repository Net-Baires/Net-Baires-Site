import { Component } from '@angular/core';

import { Config } from '../config';

@Component({
  selector: 'nb-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.css' ]
})
export class FooterComponent {
  slack = Config.JOIN_SLACK_URL;
  twitter = Config.TWITTER_URL;
  facebook = Config.FACEBOOK_URL;
  github = Config.GITHUB_URL;
}