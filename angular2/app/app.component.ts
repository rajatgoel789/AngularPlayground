import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav  *ngIf="true" >
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/add" routerLinkActive="active">Add New</a> 
      <a  routerLinkActive="active"> Logout </a> 
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/bootstrap.min.css' , 'app/app.component.css'],
})
export class AppComponent {
  title = 'Playground :: Angular2';
  menuDisplay = true ;  
}
