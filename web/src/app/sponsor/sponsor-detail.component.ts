import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Sponsor } from '../models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'nb-sponsor-detail',
  templateUrl: './sponsor-detail.component.html',
  styleUrls: [ './sponsor-detail.component.css' ]
})
export class SponsorDetailComponent {
    sponsor: Sponsor;

    constructor(private sponsorService: SponsorService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.sponsorService.getOne(+params.get('id')))
            .subscribe(sponsor => this.sponsor = sponsor);
    }
    
    //   save(): void {
    //     this.heroService.update(this.hero)
    //       .then(() => this.goBack());
    //   }
    
    goBack(): void {
        this.location.back();
    }
}