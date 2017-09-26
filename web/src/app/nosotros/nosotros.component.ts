import { Component, OnInit } from '@angular/core';

import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: [ './nosotros.component.css' ],
})
export class NosotrosComponent {
    organizadores: Member[];
    colaboradores: Member[];
  
    constructor(private memberService: MemberService) { }
    
    ngOnInit(): void {
        this.getOrganizadores();
        this.getColaboradores();
    }
    
    getOrganizadores(): void {
        this.memberService.getFilterMembers(true).then(members => this.organizadores = members);
    }

    getColaboradores(): void {
        this.memberService.getFilterMembers(false).then(members => this.colaboradores = members);
    }
}