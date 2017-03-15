import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { DatePipe } from "@angular/common";
//import { ArraySortPipe } from "./pipe";

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  //pipes: [ DatePipe,ArraySortPipe],
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
  
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  heroesOrg: Hero[] = [];
  errorMessage  : any;
  orderType : number;
  sortFN : any;
  sortLN : any;
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }
  
  getSorted(args) : void {
    if(this.orderType==1){
      if(args=='firstName'){
        this.sortFN='fa fa-sort-desc';
        this.sortLN='fa fa-sort';
      }
      if(args=='lastName'){
        this.sortFN='fa fa-sort';
        this.sortLN='fa fa-sort-desc';
      }
      this.orderType=-1;
    }else{
      if(args=='firstName'){
        this.sortFN='fa fa-sort-asc';
        this.sortLN='fa fa-sort';
      }
      if(args=='lastName'){
        this.sortFN='fa fa-sort';
        this.sortLN='fa fa-sort-asc';
      }
      this.orderType=1;
    }
    this.heroes.sort((a: any, b: any) => {
      if(this.orderType==1){
        if (a[args] < b[args]) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }
      }else{
        if (a[args] < b[args]) {
          return 1;
        } else if (a[args] > b[args]) {
          return -1;
        } else {
          return 0;
        }
      }
      
    });
    return this.heroes;
  }
  getHeroesList(): void {
    console.log("getHeroesList" , this.heroService);
    
    this.heroService.getHeroesList()
                     .subscribe(
                       heroes => {this.heroesOrg = heroes,this.heroes = heroes ; console.log("Heroes " , heroes ); },
                       error =>  this.errorMessage = <any>error);
  }

	filterData(argsItem) : void {
      if(argsItem.length>0){
        return this.heroes.filter(item => item.firstName.indexOf(argsItem) > -1);
      }else{
        this.heroes = this.heroesOrg;
      }
      
    
  }
	
  deleteEmployee(id):void{
      console.log("selected hero" , id ) ;

    this.heroService.removeHeros(id)
                     .subscribe(                       
                       heroes => {

                         // this.heroes = heroes ; 
                         var heroeslist = this.heroes ; 
                         for(var i=0; i< heroeslist.length; i++ ){
                           if(heroeslist[i].id == id){
                              this.heroes.splice(i, 1);
                           }
                         }
                       },
                       error => {
                         this.errorMessage = <any>error
                       }

                       );




  }
  ngOnInit(): void {
    this.getHeroesList();
    this.sortFN='fa fa-sort';
    this.sortLN='fa fa-sort';
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/