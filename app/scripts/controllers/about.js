'use strict';

/**
 * @ngdoc function
 * @name ratingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ratingApp
 */
angular.module('ratingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
