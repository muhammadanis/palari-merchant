phinisiApp.controller('detailsController', ['$scope', '$http', '$window', '$log', '$state',
	function($scope, $http, $window, $log, $state){
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
		$scope.provinces = {};
		$scope.cities = {};
		$scope.districts = {};

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
							$state.transitionTo('merchant.home', {arg : 'arg'});					
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

		$scope.getProvinceList = function(){
			$scope.storeDetails.merchant_address.city_id = '',
			$scope.storeDetails.merchant_address.district_id = '',
			$http.get(
				//url
				phinisiEndpoint + '/area/province',				
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				}
			)
			.success(function(data){
				$scope.provinces = data;
				$log.debug($scope.provinces);
				$log.debug("Get province list success");
			})
			.error(function(data){
				$scope.error = data.description;				
			});

		}
		$scope.getCityList = function (selectedProvince){
			$scope.storeDetails.merchant_address.district_id = '',
			$http.get(
				//url
				phinisiEndpoint + '/area/city?parent=' + selectedProvince,				
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				}
			)
			.success(function(data){
				$scope.cities = data;	
				$log.debug($scope.cities);
				$log.debug("Get city list success");
			})
			.error(function(data){
				$scope.error = data.description;				
			});
		};
		$scope.getDistrictList = function (selectedCity){
			$http.get(
				//url
				phinisiEndpoint + '/area/district?parent=' + selectedCity,				
				//config
				{
					headers :{ 'Content-Type': 'application/json','Accept': 'application/json'}	,				
				}
			)
			.success(function(data){
				$scope.districts = data;	
				$log.debug($scope.districts);
				$log.debug("Get district list success");
			})
			.error(function(data){
				$scope.error = data.description;				
			});
		};

	}]);
