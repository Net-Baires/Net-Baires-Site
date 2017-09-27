import { IEntity } from './ientity';
import { Event } from './event';

export class MeetupGroup implements IEntity {
    id: number;
    groupId: number;
    name: string;
    urlName: string;
    photoURL: string;
    color: string;
    events: Event[];
}