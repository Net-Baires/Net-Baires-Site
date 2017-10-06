import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'nb-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: [ './member-add.component.css' ]
})
export class MemberAddComponent {
    member: Member;
    
    constructor(private memberService: MemberService,
        private location: Location) { }

    ngOnInit(): void {
        this.member = new Member();
    }
    
    save(): void {
        this.memberService.create(this.member)
            .then(() => this.goBack());
    }
    
    goBack(): void {
        this.location.back();
    }
}