import { HERO } from './hero/hero-detail/hero';
import { Injectable } from '@angular/core';
import { HEROES } from './hero/mock-heroes';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl='api/heroes'; //url to web api

  constructor(private messageService:MessageService,private http:HttpClient) { }
  /** log a HeroService message with the MessageService*/

 
  
/**GET heroes from the server */
  getHeroes():Observable<HERO[]>{
  return this.http.get<HERO[]>(this.heroesUrl)
  .pipe(
    tap(_=>this.log('fetched heroes')),
    catchError(this.handleError<HERO[]>('getHeroes',[]))
  );
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}



 getHero(id:number):Observable<HERO>{
   const hero =HEROES.find(h => h.id ===id)!;
   this.messageService.add(`HeroService:fetched hero id=${id}`);
   return of(hero);
 }

 private log(message:string){
  this.messageService.add(`HeroService:${message}`);
}

};

