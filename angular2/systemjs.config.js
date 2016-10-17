/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js', // Core Libraries
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js', //Common Directives
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js', //Angular 2 Compiler
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js', //Allows to loads Application in browser with pre-compiled templates 
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js', //Compiles templates on the fly
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js', //For http interaction
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js', //Enables Router 
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js', //Enables A2 Forms
      'angular2-jwt':  'npm:angular2-jwt/angular2-jwt.js',
      'js-base64':'npm:js-base64/base64.js',
      // 'jwt-decode':'npm:jwt-decode/lib/index.js', 
      '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',

      'buffer':'@empty',
      // other libraries
      'rxjs':   'npm:rxjs', //
      //'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      /*'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }*/
    }
  });
})(this);