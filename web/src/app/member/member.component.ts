import { Component, OnInit } from '@angular/core';

import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'nb-member',
  templateUrl: './member.component.html',
  styleUrls: [ './member.component.css' ]
})
export class MemberComponent {
    members: Array<Member>;

    constructor(private memberService: MemberService) { }

    ngOnInit(): void {
        this.getMembers();
    }

    getMembers(): void {
        this.memberService.get().subscribe(members => this.members = members);
    }
}