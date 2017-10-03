import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { CalendarComponent }   from './calendar/calendar.component';
import { CalendarHeaderComponent } from './calendar/calendar-header.component';

import { SponsorService } from './services/sponsor.service';
import { MemberService } from './services/member.service';
import { EventService } from './services/event.service';

import { CalendarColor } from './calendar/calendar-color'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    SponsorComponent,
    CalendarComponent,
    CalendarHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    SponsorService,
    MemberService,
    EventService,
    CalendarColor,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
