import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NosotrosComponent } from './nosotros.component';
import { SponsorComponent } from './sponsor.component';
import { SponsorService } from './sponsor.service';
import { MemberService } from './member.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    SponsorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    SponsorService,
    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
