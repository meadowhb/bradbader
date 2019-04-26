'use strict';

angular.module('fitbitPersonalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ux', {
        url: '/ux',
        templateUrl: 'app/ux/ux.html',
        controller: 'UxCtrl'
      });
  });