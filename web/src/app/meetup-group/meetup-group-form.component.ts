import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { MeetupGroup } from '../models/meetup-group';
import { MeetupGroupService } from '../services/meetup-group.service';

@Component({
  selector: 'meetup-group-form',
  templateUrl: './meetup-group-form.component.html',
  styleUrls: [ './meetup-group-form.component.css' ]
})
export class MeetupGroupFormComponent {
    model = new MeetupGroup();
    submitted = false;
    hasMeetupGroupId:boolean;

    constructor(private meetupGroupService: MeetupGroupService,
        private route: ActivatedRoute,
        private location: Location){ }

    ngOnInit(): void {
        var id: number;
        
           this.route.params
               .subscribe((params: ParamMap) => id = params['id']);
        
          this.hasMeetupGroupId = id != undefined;
        
          if (this.hasMeetupGroupId) {
            this.meetupGroupService.getOne(id)
                .subscribe(meetupGroup => this.model = meetupGroup);
            this.submitted = true;
          }
          else
            this.model = new MeetupGroup();
    }

    onSubmit() { 
        this.submitted = true;
        if(this.hasMeetupGroupId) 
            this.meetupGroupService.update(this.model)
                .then(() => this.goBack());
        else
            this.meetupGroupService.create(this.model)
                .then(() => this.goBack());
    }

    // newMember() {
    //     this.model = new Member();
    // }

    goBack(): void {
        this.location.back();
    }
}
