import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Member } from './member';

const MEMBERS: Member[] = [
    { 
        id: 1, 
        name: 'Germán Küber',
        twitter: 'https://twitter.com/germankuber', 
        linkedIn: 'https://ar.linkedin.com/in/germankuber', 
        photoURL: '/assets/img/team/gKuber.jpg', 
        organizador: true, 
    },
    { 
        id: 2, 
        name: 'Nicolás Bello C.',
        twitter: '', 
        linkedIn: '', 
        photoURL: '/assets/img/team/nBello.jpg', 
        organizador: true, 
    },
    { 
        id: 3, 
        name: 'Jorge Bramajo',
        twitter: '', 
        linkedIn: 'https://www.linkedin.com/in/jorge-bramajo-04137751/', 
        photoURL: '/assets/img/team/jBramajo.jpeg', 
        organizador: false, 
    },
    { 
        id: 4, 
        name: 'Gabriel Barzola',
        twitter: '', 
        linkedIn: 'https://www.linkedin.com/in/gbarzola/', 
        photoURL: '/assets/img/team/gBarzola.jpg', 
        organizador: false, 
    },
    { 
        id: 5, 
        name: 'Esteban Yañez',
        twitter: '', 
        linkedIn: '', 
        photoURL: '/assets/img/team/eYanez.jpg', 
        organizador: false, 
    },
  ];

@Injectable()
export class MemberService {
    getMembers(): Promise<Member[]> {
        return Promise.resolve(MEMBERS);
    }

    getFilterMembers(organizador:boolean): Promise<Member[]> {
        return Promise.resolve(MEMBERS.filter(member => member.organizador === organizador));
    }
}
