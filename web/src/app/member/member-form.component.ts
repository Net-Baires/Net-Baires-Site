import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Member } from '../models/member';
import { MemberType } from '../models/member-type';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'member-form',
  templateUrl: './member-form.component.html',
  styleUrls: [ './member-form.component.css' ]
})
export class MemberFormComponent {
    types = new Array<MemberType>();
    model = new Member();
    submitted = false;
    hasMemberId:boolean;

    constructor(private memberService: MemberService,
        private route: ActivatedRoute,
        private location: Location){
        this.types.push(MemberType.organizador);
        this.types.push(MemberType.colaborador);
    }

    ngOnInit(): void {
        var id: number;
        
           this.route.params
               .subscribe((params: ParamMap) => id = params['id']);
        
          this.hasMemberId = id != undefined;
        
          if (this.hasMemberId) {
            this.memberService.getOne(id)
                .subscribe(member => this.model = member);
            this.submitted = true;
          }
          else
            this.model = new Member();
    }

    onSubmit() { 
        this.submitted = true;
        if(this.hasMemberId) 
            this.memberService.update(this.model)
                .then(() => this.goBack());
        else
            this.memberService.create(this.model)
                .then(() => this.goBack());
    }

    // newMember() {
    //     this.model = new Member();
    // }

    goBack(): void {
        this.location.back();
    }
}
