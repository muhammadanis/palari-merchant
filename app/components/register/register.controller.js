var registerApp = angular.module('registerApp', ['ngAnimate']);

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
				console.log(data);	
				if(data.success){
					// success(data,status,headers,config);			
				}else{
					// failure(data,status,headers,config);
				}				
			})
			.error(function(data,status,headers,config){
				console.log(data);
				$scope.error = data.error;
				// failure(data,status,headers,config);
			});
		};

		$scope.isModelValid = function(){
			return $scope.regModel.username.length > 0 && $scope.regModel.password.length > 0;
		}
}]);

// registerApp.controller('registerController', ['', function(){
	
// }]);