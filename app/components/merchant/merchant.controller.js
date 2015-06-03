phinisiApp.controller('merchantController', ['$rootScope',
	'$scope',
	'$http',
	'$location',
	'$log',
	function($rootScope, $scope, $http, $location, $log){
		$scope.merchantModel = {};
		$scope.$log = $log;

		$scope.createMerchant = function(){
			//get merchant details and merchant address from model
			console.log($scope.merchantModel.merchantName);
			console.log($scope.merchantModel.token);
			console.log($scope.merchantModel.merchantLogoUrl);
			console.log($scope.merchantModel.cityId);
			console.log($scope.merchantModel.street);
			console.log($scope.merchantModel.phoneNumber);

			$http.post(
				//url
				phinisiEndpoint + '/merchant/info/create',
				//data
				{
				  token: $scope.merchantModel.token, 
				  merchant_details: {
				      merchant_name: $scope.merchantModel.merchantName, 
				      merchant_logo_url: $scope.merchantModel.merchantLogoURL
				  }, 
				  merchant_address: {
				      city_id: $scope.merchantModel.cityId, 
				      address: $scope.merchantModel.street, 
				      phone_number: $scope.merchantModel.phoneNumber
				  }
				},
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				})
			.success(function(data,status,headers,config){
				if(data.success){
					if(data.success){
						console.log('Success! merchant_id ' + data.merchant_id);						
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