import { Component, ViewChild, ElementRef, OnInit, Pipe, PipeTransform  } from '@angular/core';

import { Observable }       from 'rxjs/Observable';
//import { Subject }          from 'rxjs/Subject';

import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Ng2MessagePopupComponent, Ng2PopupComponent} from 'ng2-popup';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalCustomclass } from './modal-customclass';
import 'rxjs/Rx';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ],

})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  errorMessage: string;
  @ViewChild('input')
  input: ElementRef;
  data: any[];
  constructor(
    private router: Router,
    private heroService: HeroService) {
      this.data = [ {id:1,name:'apple'}, {id:2,name:'banana'}, {id:3,name:'carrot'}, {id:4,name:'pear'}, {id:5,name:'peach'}, {id:6,name:'orange'},{id:7,name:'mango'}, {id:8,name:'grapes'}, {id:9:name:'lime'}, {id:10,name:'lemon'} ]    
      //this.data = [ {id:1,name:'apple'}, {id:2,name:'banana'}, {id:3,name:'carrot'}, {id:4,name:'pear'}, {id:5,name:'peach'}, {id:6,name:'orange'},{id:7'mango'}, {id:8'grapes','lime','lemon' ]    
      this.heroes =[];
    }

  getHeroes(): void {

    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroesList(): void {
    
    
    this.heroService.getHeroesList()
                     .subscribe(
                       heroes => {this.heroes = heroes ; console.log("Heroes " , heroes ); },
                       error =>  this.errorMessage = <any>error);

  }


  ngOnInit(): void {
    // this.getHeroes();
     this.getHeroesList();
     let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
     eventObservable.subscribe();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    //this.router.navigate(['/detail', this.selectedHero.id]);
    console.log("gotoDetail",this);
    // this.popup.open(Ng2MessagePopupComponent, {
    //     title: 'My Title',
    //     message: '<strong>HIiii</strong>',
    //     template:'<strong>HIiii</strong>',
    //     buttons : {
    //         OK: () => {
    //           console.log("HERE ", this.message , this , this.selectedHero ); 
    //           //this.message = "Ok button is pressed";
    //         },
    //         CANCEL: () => {
    //           //this.message = "Cancel button is pressed";
    //           this.popup.close();
    //         }
    //      }
    //   });
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

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  data1: Hero[];  
  transform(data1: Hero[], searchTerm: string): any[] {
      searchTerm = searchTerm.toUpperCase();
      return data1.filter(item => {
        return item.name.toUpperCase().indexOf(searchTerm) !== -1 
      });
  }
}