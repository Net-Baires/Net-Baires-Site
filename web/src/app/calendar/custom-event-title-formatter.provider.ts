import { LOCALE_ID, Injectable, Inject,Pipe, PipeTransform } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';

import { DomSanitizer} from '@angular/platform-browser';

import { Event } from '../models/event'

@Injectable()
export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {

  constructor(@Inject(LOCALE_ID) private locale: string, private sanitizer: DomSanitizer) {
    super();
  }

  // you can override any of the methods defined in the parent class

  month(event: CalendarEvent<{ event: Event }>): any {

    //  return `<b>${new Intl.DateTimeFormat(this.locale, {hour: 'numeric', minute: 'numeric'}).format(event.start)}</b> ${event.title}`;
    return this.sanitizer.bypassSecurityTrustHtml(
        '<style>.event-link, .event-link:hover{ color: white !important; } </style>'
        + '<a class="event-link" href="' + event.meta.event.link + '" target="_blank" >'
        + '<span>'
        + '<img class="img-responsive" src="' + event.meta.event.group.photoURL + '" style="max-height:20px;padding-right: 10px;"/>'
        + event.meta.event.group.name
        + ' - '
        + event.title
        + '</span>'
        + '</a>')
  }

  week(event: CalendarEvent): string {
    return `<b>${new Intl.DateTimeFormat(this.locale, {hour: 'numeric', minute: 'numeric'}).format(event.start)}</b> ${event.title}`;
  }

  day(event: CalendarEvent): string {
    return `<b>${new Intl.DateTimeFormat(this.locale, {hour: 'numeric', minute: 'numeric'}).format(event.start)}</b> ${event.title}`;
  }

}
