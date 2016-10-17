import { Component } from '@angular/core';
import { Routes, Router ,RouterModule } from '@angular/router';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav  *ngIf="true" >
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
  menuDisplay = true ; 

  constructor(public router: Router) {
  }
  
  logout(): void {
    localStorage.removeItem('id_token');
    this.router.navigate(['login']);
  }
}
