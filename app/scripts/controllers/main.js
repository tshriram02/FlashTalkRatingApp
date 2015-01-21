'use strict';

/**
 * @ngdoc function
 * @name ratingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ratingApp
 */
angular.module('ratingApp')
  .controller('MainCtrl', function ($scope,commentsService,$location) {
        $scope.rate = 0;
        $scope.max = 5;
        $scope.isReadonly = false;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
        ];
        $scope.submit = function(){
            commentsService.postComments($scope.comments,$scope.rate).then(function() {
                $location.path('submissionPage');
            });
        };

  });
