import { IEntity } from '../models/ientity';

export class Sponsor implements IEntity{
    id: number;
    name: string;
    photoURL: string;
    url: string;
}