import { Component, OnInit } from '@angular/core';

import { Sponsor } from './sponsor';
import { SponsorService } from './sponsor.service';

@Component({
  selector: 'sponsor',
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
        this.sponsorService.getSponsors().then(sponsors => this.sponsors = sponsors);
    }
}