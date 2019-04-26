'use strict';

angular.module('fitbitPersonalApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.awesomeThings = [];
    $scope.data = {
      steps: 0,
      heartbit: 0
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('/api/things/activities')
    .success(function(data, status){
    	console.log('success authorize: ', data);
      $scope.data.steps = data.steps;
    })
    .error(function(error, status) {
    	console.log('error in authorize: ', error, status);
    });

    $http.get('/api/things/heartbits')
    .success(function(data, status){
      console.log('success authorize: ', data);
      $scope.data.heartbit = data.heartbit;
    })
    .error(function(error, status) {
      console.log('error in authorize: ', error, status);
    });

    $scope.hold = function() {
      console.log('hold');
    };

    $scope.release = function() {
      console.log('release');
    };

    $scope.fireEvent = function(fireEvent) {
      console.log(fireEvent);
    };

    $scope.listenTouchEnd = function() {
      $('.link-container').on('touchend',function(e){ 
        $timeout(function(){
          $scope.activeAbout = false;
          $scope.activeVideo = false;
          $scope.activeUx = false;
        })
      });
    };

    $(document).ready(function() {
        $(".link-container").on("contextmenu",function(){
           return false;
        }); 
    }); 

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
