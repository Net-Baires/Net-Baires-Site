import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Sponsor } from '../models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'sponsor-form',
  templateUrl: './sponsor-form.component.html',
  styleUrls: [ './sponsor-form.component.css' ]
})
export class SponsorFormComponent {
    model = new Sponsor();
    submitted = false;
    hasSponsorId:boolean;

    constructor(private sponsorService: SponsorService,
        private route: ActivatedRoute,
        private location: Location){ }

    ngOnInit(): void {
        var id: number;
        
           this.route.params
               .subscribe((params: ParamMap) => id = params['id']);
        
          this.hasSponsorId = id != undefined;
        
          if (this.hasSponsorId) {
            this.sponsorService.getOne(id)
                .subscribe(meetupGroup => this.model = meetupGroup);
            this.submitted = true;
          }
          else
            this.model = new Sponsor();
    }

    onSubmit() { 
        this.submitted = true;
        if(this.hasSponsorId) 
            this.sponsorService.update(this.model)
                .then(() => this.goBack());
        else
            this.sponsorService.create(this.model)
                .then(() => this.goBack());
    }

    // newMember() {
    //     this.model = new Member();
    // }

    goBack(): void {
        this.location.back();
    }
}
