import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MeetupGroup } from '../models/meetup-group';
import { MeetupGroupService } from '../services/meetup-group.service';

@Component({
  selector: 'nb-meetup-group-detail',
  templateUrl: './meetup-group-detail.component.html',
  styleUrls: [ './meetup-group-detail.component.css' ]
})
export class MemberDetailComponent {
    meetupGroup: MeetupGroup;
    
    constructor(private meetupGroupService: MeetupGroupService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.meetupGroupService.getOne(+params.get('id')))
            .subscribe(meetupGroup => this.meetupGroup = meetupGroup);
    }
        
    goBack(): void {
        this.location.back();
    }
}