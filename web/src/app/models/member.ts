import { IEntity } from '../models/ientity';
import { MemberType } from '../models/member-type';

export class Member implements IEntity {
    id: number;
    name: string;
    twitter: string;
    linkedIn: string;
    photoURL: string;
    type: MemberType;
}