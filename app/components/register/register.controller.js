var registerApp = angular.module('loginApp', ['ngAnimate']);

registerApp.controller('registerController', function($rootScope, $scope, $http, $location){
	$scope.regModel = {};
	$scope.register = function(){
		//get username and password from model
		console.log($scope.regModel.username);
		console.log($scope.regModel.password);

		//send to api
		$scope.error = "Please Put username and password";	
	};
});