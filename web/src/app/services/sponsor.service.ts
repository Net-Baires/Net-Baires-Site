import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { Sponsor } from '../models/sponsor';

@Injectable()
export class SponsorService extends BaseService<Sponsor> {
    private sponsorsUrl = '/api/sponsors';  // URL to web api

  constructor(http: Http) { 
      super(http); 
        this.url = this.url + this.sponsorsUrl;
    }
}