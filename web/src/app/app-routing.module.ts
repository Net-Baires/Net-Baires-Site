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
import { MemberFormComponent }   from './member/member-form.component';
import { MeetupGroupComponent }   from './meetup-group/meetup-group.component';
import { MeetupGroupFormComponent }   from './meetup-group/meetup-group-form.component';
import { SponsorListComponent }   from './sponsor/sponsor-list.component';
import { SponsorFormComponent }   from './sponsor/sponsor-form.component';

const PUBLIC_ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'calendar',  component: CalendarComponent }, 
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent },
];

export const SECURE_ROUTES: Routes = [
  { path: 'members', component: MemberComponent },
  { path: 'memberform', component: MemberFormComponent },
  { path: 'memberform/:id', component: MemberFormComponent },
  { path: 'meetupgroups', component: MeetupGroupComponent },
  { path: 'meetupgroupform', component: MeetupGroupFormComponent },
  { path: 'meetupgroupform/:id', component: MeetupGroupFormComponent },
  { path: 'sponsors', component: SponsorListComponent },
  { path: 'sponsorform', component: SponsorFormComponent },
  { path: 'sponsorform/:id', component: SponsorFormComponent },
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
