phinisiApp.controller('tokenController', ['$rootScope', '$scope', '$http', '$location', '$log',
	function($rootScope, $scope, $http, $location, $log){
		$scope.tokenModel = {};
		$scope.tokenModel.sandbox = {};
		$scope.tokenModel.production = {};		

		$scope.saveToken = function(){
			$log.debug($scope.tokenModel.sandbox.server_key);
			$log.debug($scope.tokenModel.sandbox.client_key);
			$log.debug($scope.tokenModel.production.server_key);
			$log.debug($scope.tokenModel.production.client_key);

			$http.post(
				//url
				phinisiEndpoint + '/merchant/key/create',
				//data
				{sandbox : $scope.tokenModel.sandbox, production : $scope.tokenModel.production},
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				})
			.success(function(data,status,headers,config){
				$log.debug(data);
				if(data.success){
					$log.debug("success save token");
				}else{
					$scope.error = data.description;
				}
			})
			.error(function(data,status,headers,config){
				$log.debug(data);
				$scope.error = data.error;				
			});
		};

		$scope.getToken = function(){
			$scope.tokenModel.sandbox.server_key = "server_key1";
			$scope.tokenModel.sandbox.client_key = "client_key2";
			$scope.tokenModel.production.server_key = "server_key3";
			$scope.tokenModel.production.client_key = "client_key4";

		};

		$scope.getToken();
}]);