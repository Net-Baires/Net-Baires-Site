import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'nb-member',
  templateUrl: './member.component.html',
  styleUrls: [ './member.component.css' ]
})
export class MemberComponent {
    members: Array<Member>;

    constructor(private memberService: MemberService,
        private router: Router) { }

    ngOnInit(): void {
        this.getMembers();
    }

    getMembers(): void {
        this.memberService.get().subscribe(members => this.members = members);
    }
    
    add(): void {
        let link = ['/addmember'];
        this.router.navigate(link);
    }
}