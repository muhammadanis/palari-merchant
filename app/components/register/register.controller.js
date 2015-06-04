// var registerApp = angular.module('registerApp', ['ngAnimate']);

phinisiApp.controller('registerController', ['$rootScope', '$scope', '$http', '$location', '$log', '$state', 
	function($rootScope, $scope, $http, $location, $log, $state){
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
				console.log(data);			
				if(data.success){
					console.log('success register');
					$state.transitionTo('login', {arg : 'arg'});					
				}else{
					console.log('failed register');
					$scope.error = data.description;
				}
			})
			.error(function(data,status,headers,config){
				console.log(data);
				$scope.error = data.error;				
			});
		};

		$scope.isModelValid = function(){
			return $scope.regModel.username.length > 0 && $scope.regModel.password.length > 0;
		}
}]);