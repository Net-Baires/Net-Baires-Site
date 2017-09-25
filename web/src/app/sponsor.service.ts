import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Sponsor } from './sponsor';

// const SPONSORS: Sponsor[] = [
//     { 
//         id: 1, 
//         name: 'MUG',
//         URL: 'http://www.mug-it.org.ar/',
//         photoURL: 'assets/img/sponsors/mug.jpeg', 
//     },
//     { 
//         id: 2, 
//         name: 'SouthWorks',
//         URL: 'http://southworks.com',
//         photoURL: 'assets/img/sponsors/south-works.jpeg', 
//     },
//     { 
//         id: 3, 
//         name: 'StickerMule',
//         URL: 'https://www.stickermule.com/',
//         photoURL: 'assets/img/sponsors/sticker-mule.png', 
//     },
//     { 
//         id: 4, 
//         name: 'KineticaSolutions',
//         URL: 'http://www.kinetica-solutions.com/',
//         photoURL: 'assets/img/sponsors/kinetica.jpeg', 
//     },
//     { 
//         id: 5, 
//         name: 'Lagash',
//         URL: 'https://www.lagash.com/',
//         photoURL: 'assets/img/sponsors/lagash.png', 
//     },
//     { 
//         id: 6, 
//         name: 'Belatrix',
//         URL: 'http://www.belatrixsf.com/',
//         photoURL: 'assets/img/sponsors/belatrix.png', 
//     },
//     { 
//         id: 7, 
//         name: 'Baufest',
//         URL: 'http://www.baufest.com/',
//         photoURL: 'assets/img/sponsors/baufest.png', 
//     },
//     { 
//         id: 8, 
//         name: 'JetBrains',
//         URL: 'https://www.jetbrains.com/',
//         photoURL: 'assets/img/sponsors/jetbrains.png', 
//     },
//   ];

@Injectable()
export class SponsorService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private sponsorsUrl = 'http://localhost:60850/api/sponsors';  // URL to web api

  constructor(private http: Http) { }

    getSponsors(): Promise<Sponsor[]> {
        return this.http.get(this.sponsorsUrl)
                .toPromise()
                .then(response => response.json().data as Sponsor[])
                .catch(this.handleError);
    }
    // getSponsors(): Promise<Sponsor[]> {
    //     return Promise.resolve(SPONSORS);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}