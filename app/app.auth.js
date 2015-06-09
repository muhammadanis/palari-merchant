phinisiApp.factory('authInterceptor', ['$rootScope', '$q' , '$window', function($rootScope,$q,$window){
	return {
		request: function(config){
			config.headers = config.headers || {};
			if($window.sessionStorage.token) {
				// config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
			}
			return config;
		},
		response: function(response){
			console.log(response);
			if (response.status === 401) {
        		// handle the case where the user is not authenticated
      		}	
      		return response || $q.when(response);
		}
	};
}]);

sessionApp.config(function($httpProvider, $windowProvider) {	
	$httpProvider.interceptors.push('authInterceptor');
	var myWindow = $windowProvider.$get();	
	$httpProvider.defaults.transformRequest = function(data){
		if(myWindow.sessionStorage.token){
			if(data){
				console.log('request data: ' + data);	
				// data.token = myWindow.sessionStorage.token;	
				console.log(data);			
			}
			return angular.toJson(data);
		}
	}	
});