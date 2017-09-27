import { Component, OnInit } from '@angular/core';

import { Member } from '../models/member';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'nb-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: [ './nosotros.component.css' ],
})
export class NosotrosComponent {
    organizadores: Member[];
    colaboradores: Member[];
  
    constructor(private memberService: MemberService) { }
    
    ngOnInit(): void {
        this.getMembers();
    }
    
    getMembers(): void {
        this.memberService.get().subscribe(members => {
            this.organizadores = members.filter(member => member.type == 1);
            this.colaboradores = members.filter(member => member.type == 2);
        });
    }
}