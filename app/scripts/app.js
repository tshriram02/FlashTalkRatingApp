'use strict';

/**
 * @ngdoc overview
 * @name ratingApp
 * @description
 * # ratingApp
 *
 * Main module of the application.
 */
angular
  .module('ratingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/submissionPage', {
        templateUrl: 'views/submissionPage.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
