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
import { MemberEditComponent }   from './member/member-edit.component';

const PUBLIC_ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'calendar',  component: CalendarComponent }, 
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'callback', component: CallbackComponent },
];

export const SECURE_ROUTES: Routes = [
  { path: 'member', component: MemberComponent },
  { path: 'memberdetail/:id', component: MemberDetailComponent },
  { path: 'memberedit/:id', component: MemberEditComponent },
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
