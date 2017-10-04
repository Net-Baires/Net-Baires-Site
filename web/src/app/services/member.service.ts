import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { Member } from '../models/member';

@Injectable()
export class MemberService extends BaseService<Member> {
    private sponsorsUrl = '/api/members';  // URL to web api

  constructor(http: Http, authHttp: AuthHttp) { 
      super(http, authHttp); 
        this.url = this.url + this.sponsorsUrl;
    }
}