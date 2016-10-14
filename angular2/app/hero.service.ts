import { Hero }                               from './hero';
import { HEROES }                             from './mock-heroes';
import { Injectable }                         from '@angular/core';
import { ActivatedRoute, Params,Router }      from '@angular/router';
import { Http, Headers,Response }             from '@angular/http';
import { contentHeaders }                     from './headers';
import { Observable }                         from 'rxjs/Observable';

@Injectable()
export class HeroService {
  private heroesUrl = 'http://localhost:1337/product/'; 
  constructor(
    public http:Http,
    public router: Router  
  ) {}


  getHeroesList (): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  removeHeros(id):Observable<Hero[]> {
    return this.http.delete(this.heroesUrl+id)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  updateHeros(id , obj):Observable<Hero[]> {
    return this.http.put(this.heroesUrl+id , obj)
                    .map(this.extractData)
                    .catch(this.handleError);

  }  

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


  getHeroes(): Promise<Hero[]> {
    console.log("HEROES" , HEROES);
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  getHero(id): Observable<Hero> {
    return this.http.get(this.heroesUrl+id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }



}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/