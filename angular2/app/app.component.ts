import { Component } from '@angular/core';
import { Routes, Router ,RouterModule } from '@angular/router';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav  *ngIf="menuDisplay" >
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/add" routerLinkActive="active">Add New</a> 
      <a  routerLinkActive="active" (click)="logout()" > Logout </a> 
    </nav>
    <router-outlet ></router-outlet>
  `,
  styleUrls: ['app/bootstrap.min.css' , 'app/app.component.css'],
})
export class AppComponent {
  title = 'Playground :: Angular2';
  menuDisplay = false ; 

  constructor(public router: Router) {

      if(localStorage.getItem('id_token')){
          this.menuDisplay = true ; 
      }      
  }
  
  logout(): void {
    localStorage.removeItem('id_token');
     this.menuDisplay = false ; 
    this.router.navigate(['login']);
  }
}
