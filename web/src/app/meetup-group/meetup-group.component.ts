import { Component, OnInit } from '@angular/core';

import { MeetupGroup } from '../models/meetup-group';
import { MeetupGroupService } from '../services/meetup-group.service';

@Component({
  selector: 'nb-meetup-group',
  templateUrl: './meetup-group.component.html',
  styleUrls: [ './meetup-group.component.css' ]
})
export class MeetupGroupComponent {
    meetupGroups: Array<MeetupGroup>;

    constructor(private meetupGroupService: MeetupGroupService) { }

    ngOnInit(): void {
        this.getMeetupGroups();
    }

    getMeetupGroups(): void {
        this.meetupGroupService.get().subscribe(meetupGroups => this.meetupGroups = meetupGroups);
    }
}