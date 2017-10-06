import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Sponsor } from '../models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'nb-sponsor-add',
  templateUrl: './sponsor-add.component.html',
  styleUrls: [ './sponsor-add.component.css' ]
})
export class SponsorAddComponent {
    sponsor: Sponsor;
    
    constructor(private sponsorService: SponsorService,
        private location: Location) { }

    ngOnInit(): void {
        this.sponsor = new Sponsor();
    }
    
    save(): void {
        this.sponsorService.create(this.sponsor)
            .then(() => this.goBack());
    }
    
    goBack(): void {
        this.location.back();
    }
}