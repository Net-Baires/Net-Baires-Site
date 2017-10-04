import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { Event } from '../models/event';

@Injectable()
export class EventService extends BaseService<Event> {
    private eventUrl = '/api/events';  // URL to web api

  constructor(http: Http, authHttp: AuthHttp) { 
      super(http, authHttp); 
        this.url = this.url + this.eventUrl;
    }
}