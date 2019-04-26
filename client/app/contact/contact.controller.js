'use strict';

angular.module('fitbitPersonalApp')
.controller('ContactCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.contactForm = {};

    $scope.submitMessage = function() {
    	
    	console.log($scope.contactForm.subject);
    	console.log($scope.contactForm.message);
    	if($scope.contactForm.subject && $scope.contactForm.message) {
    		$scope.contactForm.formSubmit = true;
    		$http.post('/api/things/sendemail', $scope.contactForm)
    		.success(function(res, status, header){
    			console.log('success: ', res);
    			$scope.form.$setPristine();
    			$scope.form.$setUntouched();
    			$scope.contactForm = {};
    		})
    		.error(function(error, status, header) {
    			console.log('error: ', error);
    		});	
    	} else {
    		$scope.contactForm.formSubmit = false;
    		return false;
    	}
    	
    };
});
