'use strict';

describe('Controller: InstaCtrl', function () {

  // load the controller's module
  beforeEach(module('fitbitPersonalApp'));

  var InstaCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstaCtrl = $controller('InstaCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
