import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Sponsor } from '../models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'nb-sponsor-edit',
  templateUrl: './sponsor-edit.component.html',
  styleUrls: [ './sponsor-edit.component.css' ]
})
export class SponsorEditComponent {
    sponsor: Sponsor;
    
    constructor(private sponsorService: SponsorService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.sponsorService.getOne(+params.get('id')))
            .subscribe(sponsor => this.sponsor = sponsor);
    }
    
    save(): void {
        this.sponsorService.update(this.sponsor)
            .then(() => this.goBack());
    }
    
    goBack(): void {
        this.location.back();
    }
}