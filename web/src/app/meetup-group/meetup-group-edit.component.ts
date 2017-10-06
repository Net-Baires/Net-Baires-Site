import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MeetupGroup } from '../models/meetup-group';
import { MeetupGroupService } from '../services/meetup-group.service';

@Component({
  selector: 'nb-meetup-group-edit',
  templateUrl: './meetup-group-edit.component.html',
  styleUrls: [ './meetup-group-edit.component.css' ]
})
export class MeetupGroupEditComponent {
    meetupGroup: MeetupGroup;
    
    constructor(private meetupGroupService: MeetupGroupService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.meetupGroupService.getOne(+params.get('id')))
            .subscribe(meetupGroup => this.meetupGroup = meetupGroup);
    }
    
    save(): void {
        this.meetupGroupService.update(this.meetupGroup)
            .then(() => this.goBack());
    }
    
    goBack(): void {
        this.location.back();
    }
}