import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Sponsor } from '../models/sponsor';
import { SponsorService } from '../services/sponsor.service';

@Component({
  selector: 'nb-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: [ './sponsor-list.component.css' ]
})
export class SponsorListComponent {
    sponsors: Array<Sponsor>;

    constructor(private sponsorService: SponsorService,
        private router: Router) { }

    ngOnInit(): void {
        this.getSponsors();
    }

    getSponsors(): void {
        this.sponsorService.get().subscribe(sponsors => this.sponsors = sponsors);
    }

    add(): void {
        let link = ['/addsponsor'];
        this.router.navigate(link);
    }
}