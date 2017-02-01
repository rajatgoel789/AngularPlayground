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
var http_1 = require('@angular/http');
var headers_1 = require('./headers');
var global_1 = require('./global');
var app_component_1 = require('./app.component');
// const styles   = require('./login.css');
// const template = require('./login.html');
var Login = (function () {
    function Login(appcomp, router, http) {
        this.appcomp = appcomp;
        this.router = router;
        this.http = http;
        this.formData = {};
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        var body = this.formData;
        console.log(" formData ", this.formData, "THIS ", this);
        this.http.post(global_1.GlobalVariable.BASE_API_URL + 'login', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            _this.appcomp.menuDisplay = true;
            localStorage.setItem('id_token', response.json().id_token);
            _this.router.navigate(['dashboard']);
        }, function (error) {
            alert(error.text());
            console.log(error, error.text());
        });
    };
    Login = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.html',
            styleUrls: ['login.css', 'bootstrap.min.css']
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent, router_1.Router, http_1.Http])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map