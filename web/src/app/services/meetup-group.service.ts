import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { MeetupGroup } from '../models/meetup-group';

@Injectable()
export class MeetupGroupService extends BaseService<MeetupGroup> {
    private sponsorsUrl = '/api/meetupgroups';  // URL to web api

  constructor(http: Http, authHttp: AuthHttp) { 
      super(http, authHttp); 
        this.url = this.url + this.sponsorsUrl;
    }
}