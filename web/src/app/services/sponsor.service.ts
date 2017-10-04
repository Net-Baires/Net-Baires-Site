import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { Sponsor } from '../models/sponsor';

@Injectable()
export class SponsorService extends BaseService<Sponsor> {
    private sponsorsUrl = '/api/sponsors';  // URL to web api

  constructor(http: Http, authHttp: AuthHttp) { 
      super(http, authHttp); 
        this.url = this.url + this.sponsorsUrl;
    }
}