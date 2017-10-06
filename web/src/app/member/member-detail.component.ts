import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'nb-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: [ './member-detail.component.css' ]
})
export class MemberDetailComponent {
    member: Member;

    constructor(private memberService: MemberService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.memberService.getOne(+params.get('id')))
            .subscribe(member => this.member = member);
    }
    
    //   save(): void {
    //     this.heroService.update(this.hero)
    //       .then(() => this.goBack());
    //   }
    
    goBack(): void {
        this.location.back();
    }
}