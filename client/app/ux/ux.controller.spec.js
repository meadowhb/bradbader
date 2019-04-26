'use strict';

describe('Controller: UxCtrl', function () {

  // load the controller's module
  beforeEach(module('fitbitPersonalApp'));

  var UxCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UxCtrl = $controller('UxCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
