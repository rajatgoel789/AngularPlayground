"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Playground :: Angular2';
        this.menuDisplay = false;
        if (localStorage.getItem('id_token')) {
            this.menuDisplay = true;
        }
    }
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.menuDisplay = false;
        this.router.navigate(['login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <nav  *ngIf=\"menuDisplay\" >\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a routerLink=\"/add\" routerLinkActive=\"active\">Add Employee</a> \n      <a  routerLinkActive=\"active\" (click)=\"logout()\" > Logout </a> \n    </nav>\n    <router-outlet ></router-outlet>\n  ",
            styleUrls: ['app/bootstrap.min.css', 'app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map