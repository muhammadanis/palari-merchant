var registerApp = angular.module('loginApp', ['ngAnimate']);

registerApp.controller('registerController', ['$rootScope', '$scope', '$http', '$location', '$log' , 
	function($rootScope, $scope, $http, $location, $log){
		$scope.regModel = {};
		$scope.$log = $log;
		$scope.register = function(){
			//get username and password from model
			console.log($scope.regModel.username);
			console.log($scope.regModel.password);			

			$http.post(
				//url
				phinisiEndpoint + '/merchant/register', 
				//data
				{email : $scope.regModel.username, password: $scope.regModel.password},
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				})
			.success(function(data,status,headers,config){
				$scope.$log.log(data);				
			})
			.error(function(data,status,headers,config){
				$scope.$log.log(data);
				$scope.error = data.error;
			});
	};
}]);