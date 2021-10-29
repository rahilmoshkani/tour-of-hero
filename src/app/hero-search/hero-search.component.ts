import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { debounceTime,distinctUntilChanged,switchMap } from 'rxjs/operators';

import { HERO } from '../hero/hero-detail/hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$!:Observable<HERO[]>;
  private searchTerms=new Subject<string>();

  constructor(private heroservice:HeroService) { }

  //Push a search term into the observable stream.
  search(term:string):void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
  this.heroes$=this.searchTerms.pipe(
    //wait 300ms after each keystroke before considering the term
    debounceTime(300),

    //ignore new term if same as previous term 
    distinctUntilChanged(),

    //switch to new search observable each time the term changes
    switchMap((term:string)=>this.heroservice.searchHeroes(term)),
  );
  }

}
