import { IEntity } from '../models/ientity';

export class Member implements IEntity {
    id: number;
    name: string;
    twitter: string;
    linkedIn: string;
    photoURL: string;
    organizador: boolean;
}