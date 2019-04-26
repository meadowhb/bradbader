'use strict';

angular.module('fitbitPersonalApp', [
  //'ngCookies',
  //'ngResource',
  //'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angular-gestures',
  'angular-spinkit'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, hammerDefaultOptsProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    hammerDefaultOptsProvider.set({
      recognizers: [[Hammer.Tap, { time: 250 }], [Hammer.Press, { time: 500 }]]
    });
  })

  .run(function ($rootScope, $timeout) {
    $timeout(function () {
      $rootScope.appLoaded = true;
    }, 1000);
  });
