'use strict';

angular.module('fitbitPersonalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('insta', {
        url: '/insta',
        templateUrl: 'app/insta/insta.html',
        controller: 'InstaCtrl'
      });
  });