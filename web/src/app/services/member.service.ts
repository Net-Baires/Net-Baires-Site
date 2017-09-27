import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BaseService } from './base.service';
import { Member } from '../models/member';

@Injectable()
export class MemberService extends BaseService<Member> {
    private sponsorsUrl = '/api/members';  // URL to web api

  constructor(http: Http) { 
      super(http); 
        this.url = this.url + this.sponsorsUrl;
    }
}