var tokenApp = angular.module('tokenApp', ['ngAnimate']);

tokenApp.controller('tokenController', ['$rootScope', '$scope', '$http', '$location', '$log'
	function($rootScope, $scope, $http, $location, $log){
		$scope.tokenModel = {};
		$scope.tokenModel.sandbox = {};
		$scope.tokenModel.production = {};
		
		$scope.saveToken = function(){
			$log.debug($scope.tokenModel.sandbox.server_key);
			$log.debug($scope.tokenModel.sandbox.client_key);
			$log.debug($scope.tokenModel.sandbox.client_key);
		};
}]);