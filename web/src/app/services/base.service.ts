import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

import { Observable } from 'rxjs/Observable';

import { Config } from '../config';
import { IEntity } from '../models/ientity';

@Injectable()
export class BaseService<T extends IEntity> {
    protected headers = new Headers({'content-type': 'application/json'});
    protected url : string = Config.BASE_API_URL;  // URL to web api

  constructor(protected http: Http, protected authHttp: AuthHttp) { }

    get(): Observable<T[]> {
        return this.http.get(this.url, { headers: this.headers })
            .map( results  => results.json());
    }

    getAuthorized(): Observable<T[]> {
        return this.authHttp.get(this.url, { headers: this.headers })
            .map( results  => results.json());
    }

    getOne(id: number): Observable<T> {
        const url = `${this.url}/${id}`;
        return this.http.get(url, { headers: this.headers })
            .map( results  => results.json());
    }
    
    getOneAuthorized(id: number): Observable<T> {
        const url = `${this.url}/${id}`;
        return this.authHttp.get(url, { headers: this.headers })
            .map( results  => results.json());
    }

    getFilter(filter: string): Observable<T[]> {
        return this.http.get(this.url + '?' + filter, { headers: this.headers })
            .map( results  => results.json());
    }
    
    getFilterAuthorized(filter: string): Observable<T[]> {
        return this.authHttp.get(this.url + '?' + filter, { headers: this.headers })
            .map( results  => results.json());
    }
    
    //   delete(id: number): Promise<void> {
    //     const url = `${this.url}/${id}`;
    //     return this.http.delete(url, {headers: this.headers})
    //       .toPromise()
    //       .then(() => null)
    //       .catch(this.handleError);
    //   }
    
    //   create(name: string): Promise<T> {
    //     return this.http
    //       .post(this.url, JSON.stringify({name: name}), {headers: this.headers})
    //       .toPromise()
    //       .then(res => res.json().data as T)
    //       .catch(this.handleError);
    //   }
    
      update(entity: T): Promise<T> {
        const url = `${this.url}/${entity.id}`;
        return this.authHttp
          .put(url, JSON.stringify(entity), {headers: this.headers})
          .toPromise()
          .then(() => entity)
          .catch(this.handleError);
      }

    protected handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}