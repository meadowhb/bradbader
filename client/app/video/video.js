'use strict';

angular.module('fitbitPersonalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('video', {
        url: '/video',
        templateUrl: 'app/video/video.html',
        controller: 'VideoCtrl'
      });
  });