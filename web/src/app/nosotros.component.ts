import { Component, OnInit } from '@angular/core';

import { Member } from './member';
import { MemberService } from './member.service';

@Component({
  selector: 'nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: [ 
    //   "../assets/css/bootstrap.min.css",
    //   "../assets/css/bootstrap-grid.min.css",
      './nosotros.component.css' ],
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