'use strict';

angular.module('fitbitPersonalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart');
        // if (toState.resolve) {
            $scope.contentLoaded = false;
        // }
    });
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeSuccess');
        // if (toState.resolve) {
            $scope.contentLoaded = true;
        // }
    });
  });
