phinisiApp.controller('homeController', ['$scope', '$http', '$window', '$log', 
	function($scope, $http, $window, $log){
		$scope.storeDetails = {
			merchant_details: {
				merchant_name : '', 
				merchant_logo_url : ''
			}, 
			merchant_address: {
				city_id : '', 
				address : '', 
				phone_number : ''
			}
		}
		$scope.provinces = [{id:1, name:'Jawa Barat'}, {id:2, name: 'Banten'}];
		$scope.cities = [{provinceId: 1, cityId: 1, name:'Bandung'}, {provinceId: 1, cityId: 2, name:'Bogor'}, {provinceId: 2, cityId: 3, name:'Tangerang'},];

		$scope.submit = function(){
				//get store details from model
				$log.debug($window.sessionStorage.token);
				$log.debug($scope.storeDetails);
				$http.post(
					//url
					phinisiEndpoint + '/merchant/info/create',
					//data
					{
					  merchant_details : $scope.storeDetails.merchant_details,
					  merchant_address : $scope.storeDetails.merchant_address
					},
					//config
					{
						headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
					})
				.success(function(data,status,headers,config){
					if(data.success){
						if(data.success){
							$log.debug('Create store success!');					
						}else{
							$scope.error = data.description;						
						}
					}
					$log.debug(data);			
				})
				.error(function(data,status,headers,config){
					$log.debug(data);
					$scope.error = data.error;				
				});
			};

		$scope.getDetails = function(){
			$http.post(
				//url
				phinisiEndpoint + '/merchant/info',
				//data
				{
				},
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				})
			.success(function(data,status,headers,config){
				if(data.success){
					if(data.success){
						$log.debug('Get info success!');
						$scope.storeDetails.merchant_details.merchant_name = data.merchant_name;
						$scope.storeDetails.merchant_details.merchant_logo_url = data.merchant_url;
						$scope.storeDetails.merchant_address.address = data.merchant_address;
						$scope.storeDetails.merchant_address.phone_number = data.merchant_phone;
					}else{
						$scope.error = data.description;						
					}
				}
				$log.debug(data);			
			})
			.error(function(data,status,headers,config){
				$log.debug(data);
				$scope.error = data.error;				
			});
		};


}]);