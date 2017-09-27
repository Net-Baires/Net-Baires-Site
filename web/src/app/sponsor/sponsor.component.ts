import { Component, OnInit } from '@angular/core';

import { Sponsor } from '../models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'nb-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: [ './sponsor.component.css' ]
})
export class SponsorComponent {
    sponsors: Sponsor[];
  
    constructor(private sponsorService: SponsorService) { }

    ngOnInit(): void {
        this.getSponsors();
    }
    
    getSponsors(): void {
        this.sponsorService.get().subscribe(sponsors => this.sponsors = sponsors);
    }
}