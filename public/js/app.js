'use strict';

// Declare app level module which depends on filters, and services

var medicalApp = angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]);


medicalApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/about', {
      templateUrl: 'partials/about',
      controller: 'MyCtrl1'
    }).
    when('/home', {
      templateUrl: 'partials/home',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/home'
    });

  $locationProvider.html5Mode(true);
});
