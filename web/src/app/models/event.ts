import { IEntity } from './ientity';
import { MeetupGroup } from './meetup-group';

export class Event implements IEntity {
    id: number;
    meetUpEventId: number;
    title: string;
    dateTicks: number;
    //date: string;
    color: string;
    link: string;
    group: MeetupGroup;
}