'use strict';

angular.module('fitbitPersonalApp')
  .controller('NavbarCtrl', function ($scope, $location, $state, $window) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.$state = $state;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.openLink = function(link) {
      $window.open(link, '_blank');
    };

    $scope.mouseEnterLi = function(varToChange) {
      $scope[varToChange] = true;
      $scope.mouseOnLi = true;
    };

    $scope.mouseLeaveLi = function(varToChange) {
      $scope[varToChange] = false;
      $scope.mouseOnLi = false;
    };
  });