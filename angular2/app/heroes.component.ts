import { Component, OnInit } from '@angular/core';

import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  errorMessage: string;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {

    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroesList(): void {
    console.log("getHeroesList" , this.heroService);
    
    this.heroService.getHeroesList()
                     .subscribe(
                       heroes => {this.heroes = heroes ; console.log("Heroes " , heroes ); },
                       error =>  this.errorMessage = <any>error);
  }


  ngOnInit(): void {
    // this.getHeroes();
     this.getHeroesList();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  deleteDetail():void{
      // console.log("selected hero" , this.selectedHero ) ;

    this.heroService.removeHeros(this.selectedHero.id)
                     .subscribe(                       
                       heroes => {

                         // this.heroes = heroes ; 
                         var heroeslist = this.heroes ; 
                         for(var i=0; i< heroeslist.length; i++ ){
                           if(heroeslist[i].id == this.selectedHero.id){
                              this.heroes.splice(i, 1);
                              delete this.selectedHero ;  
                           }
                         }
                       },
                       error => {
                         this.errorMessage = <any>error
                       }

                       );




  }
}