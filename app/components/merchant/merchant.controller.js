phinisiApp.controller('merchantController', ['$rootScope', '$scope', '$http', '$location', '$log', '$window', '$state',
	function($rootScope, $scope, $http, $location, $log, $window, $state){
		$scope.merchantModel = {};
		$scope.merchantModel.details = {};
		$scope.merchantModel.address = {};
		$scope.$log = $log;

		$scope.createMerchant = function(){
			//get merchant details and merchant address from model
			console.log($window.sessionStorage.token);
			console.log($scope.merchantModel.details);
			console.log($scope.merchantModel.address);

			$http.post(
				//url
				phinisiEndpoint + '/merchant/info/create',
				//data
				{
				  token: $window.sessionStorage.token, 
				  merchant_details: $scope.merchantModel.details, 
				  merchant_address: $scope.merchantModel.address
				},
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				})
			.success(function(data,status,headers,config){
				if(data.success){
					if(data.success){
						console.log('Create merchant success!');
						$state.transitionTo('token', {arg : 'arg'});						
					}else{
						$scope.error = data.description;						
					}
				}
				console.log(data);			
			})
			.error(function(data,status,headers,config){
				console.log(data);
				$scope.error = data.error;				
			});

		};
	}]);