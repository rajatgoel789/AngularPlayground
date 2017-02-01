import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from './headers';
import { GlobalVariable } from './global';
import { AppComponent }   from './app.component';
// const styles   = require('./login.css');
// const template = require('./login.html');

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: [ 'login.css','bootstrap.min.css' ]
})
export class Login {

   formData:any={};

  constructor(public appcomp:AppComponent,public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body =this.formData;
    console.log(" formData " ,this.formData , "THIS " , this );
    this.http.post(GlobalVariable.BASE_API_URL+'login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          this.appcomp.menuDisplay= true;
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['dashboard']);
        },
        error => {
          alert(error.text() );
          console.log(error , error.text());
        }
      );
  }


}