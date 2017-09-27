import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { CalendarEvent } from 'angular-calendar';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format
} from 'date-fns';
import { Observable } from 'rxjs/Observable';
//import { colors } from '../demo-utils/colors';

import { Event } from '../models/event'
import { EventService } from '../services/event.service'

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'cl-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements OnInit {
  protected headers = new Headers({'content-type': 'application/json'});

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent<{event: Event}>[];
  events$: Observable<Array<CalendarEvent<{ event: Event }>>>;
  activeDayIsOpen: boolean = false;

  constructor(private http: Http, private eventService: EventService) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.events$ = this.eventService.get().map( results  => {
      return results.map((event: Event) => {
        return {
          title: event.title,
          start: new Date(event.dateTicks),
          color: colors.yellow,
          meta: {
            event
          }
        };
      });
    });

    // this.events$ = this.http
    //   .get('http://localhost:60850/api/events', {headers: this.headers})
    //   .map( results  => {
    //     return results.json().map((event: Event) => {
    //       return {
    //         title: event.title,
    //         start: new Date(event.dateTicks),
    //         color: colors.yellow,
    //         meta: {
    //           event
    //         }
    //       };
    //     });
    // });
  }

  dayClicked({
    date,
    events
  }: {
    date: Date;
    events: Array<CalendarEvent<{ event: Event }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventClicked(calendarEvent: CalendarEvent<{ event: Event }>): void {
    window.open(
      calendarEvent.meta.event.link,
      '_blank'
    );
  }
}
