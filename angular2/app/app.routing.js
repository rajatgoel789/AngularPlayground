"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_add_component_1 = require('./hero-add.component');
var auth_guard_1 = require('./auth.guard');
var login_1 = require('./login');
var appRoutes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'add',
        component: hero_add_component_1.HeroAddComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_1.Login
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map