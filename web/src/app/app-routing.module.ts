import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from './auth/scope-guard.service';


import { PublicComponent }   from './layouts/public.component';
import { SecureComponent }   from './layouts/secure.component';

import { HomeComponent }   from './home/home.component';
import { CalendarComponent }   from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';

import { MemberComponent }   from './member/member.component';
import { MemberDetailComponent }   from './member/member-detail.component';
import { MemberAddComponent }   from './member/member-add.component';
import { MemberEditComponent }   from './member/member-edit.component';
import { MeetupGroupComponent }   from './meetup-group/meetup-group.component';
import { MeetupGroupDetailComponent }   from './meetup-group/meetup-group-detail.component';
import { MeetupGroupAddComponent }   from './meetup-group/meetup-group-add.component';
import { MeetupGroupEditComponent }   from './meetup-group/meetup-group-edit.component';
import { SponsorListComponent }   from './sponsor/sponsor-list.component';
import { SponsorDetailComponent }   from './sponsor/sponsor-detail.component';
import { SponsorAddComponent }   from './sponsor/sponsor-add.component';
import { SponsorEditComponent }   from './sponsor/sponsor-edit.component';

const PUBLIC_ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'calendar',  component: CalendarComponent }, 
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent },
];

export const SECURE_ROUTES: Routes = [
  { path: 'members', component: MemberComponent },
  { path: 'memberdetail/:id', component: MemberDetailComponent },
  { path: 'addmember', component: MemberAddComponent },
  { path: 'memberedit/:id', component: MemberEditComponent },
  { path: 'meetupgroups', component: MeetupGroupComponent },
  { path: 'meetupgroupdetail/:id', component: MeetupGroupDetailComponent },
  { path: 'addmeetupgroup', component: MeetupGroupAddComponent },
  { path: 'meetupgroupedit/:id', component: MeetupGroupEditComponent },
  { path: 'sponsors', component: SponsorListComponent },
  { path: 'sponsordetail/:id', component: SponsorDetailComponent },
  { path: 'addsponsor', component: SponsorAddComponent },
  { path: 'sponsoredit/:id', component: SponsorEditComponent },
];

const routes: Routes = [
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['admin'] }, children: SECURE_ROUTES } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
