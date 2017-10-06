import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MeetupGroup } from '../models/meetup-group';
import { MeetupGroupService } from '../services/meetup-group.service';

@Component({
  selector: 'nb-meetup-group-add',
  templateUrl: './meetup-group-add.component.html',
  styleUrls: [ './meetup-group-add.component.css' ]
})
export class MeetupGroupAddComponent {
    meetupGroup: MeetupGroup;
    
    constructor(private meetupGroupService: MeetupGroupService,
        private location: Location) { }

    ngOnInit(): void {
        this.meetupGroup = new MeetupGroup();
    }
    
    save(): void {
        this.meetupGroupService.create(this.meetupGroup)
            .then(() => this.goBack());
    }
    
    goBack(): void {
        this.location.back();
    }
}