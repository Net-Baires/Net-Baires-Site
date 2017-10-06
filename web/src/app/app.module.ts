import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PublicComponent }   from './layouts/public.component';
import { SecureComponent }   from './layouts/secure.component';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { CalendarComponent }   from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar/calendar-header.component';

import { MemberComponent }   from './member/member.component';
import { MemberDetailComponent }   from './member/member-detail.component';
import { MemberEditComponent }   from './member/member-edit.component';

import { SponsorService } from './services/sponsor.service';
import { MemberService } from './services/member.service';
import { EventService } from './services/event.service';

import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthGuardService } from './auth/auth-guard.service';
import { ScopeGuardService } from './auth/scope-guard.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token'))
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    SponsorComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    ProfileComponent,
    CallbackComponent,
    MemberComponent,
    MemberDetailComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [
    SponsorService,
    MemberService,
    EventService,
    AuthService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthGuardService,
    ScopeGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
