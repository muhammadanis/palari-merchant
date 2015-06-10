paymentApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  	$urlRouterProvider.otherwise('/payment');

	$stateProvider
		.state('checkout', {
			url: '/payment',
			templateUrl: 'app/components/payment/checkout.html',
			controller: 'paymentController'			
		})
		.state('shippingDetails', {
			url: '/shipping',
			templateUrl: 'app/components/payment/shipping-details.html',
			controller: 'paymentController'
		})
		.state('addAddress', {
			url: '/add-address',
			templateUrl: 'app/components/payment/add-address.html',
			controller: 'paymentController'
		})
		.state('paymentDetails', {
			url: '/payment-details',
			templateUrl: 'app/components/payment/payment-details.html',
			controller: 'paymentController'
		})
		.state('paymentDetails.creditCard', {
			templateUrl: 'app/components/payment/payment-type/credit-card.html'
		})
		.state('paymentDetails.bankTransfer', {
			templateUrl: 'app/components/payment/payment-type/bank-transfer.html'
		})	
		.state('paymentDetails.bbmMoney', {
			templateUrl: 'app/components/payment/payment-type/bbm-money.html'
		})	
		.state('paymentFinish', {
			templateUrl: 'app/components/payment/payment-finish.html'
		})
		.state('loading', {
			templateUrl: 'app/components/payment/loading.html'
		});
});