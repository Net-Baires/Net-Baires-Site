import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { Event } from '../models/event';

@Injectable()
export class EventService extends BaseService<Event> {
    private eventUrl = '/api/events';  // URL to web api

  constructor(http: Http) { 
      super(http); 
        this.url = this.url + this.eventUrl;
    }
}