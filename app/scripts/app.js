'use strict';

angular.module('newTicApp', ['firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ticTacCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
