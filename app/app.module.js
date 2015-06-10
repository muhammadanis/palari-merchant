var phinisiApp = angular.module('phinisiApp', ['routesApp', 'sessionApp', 'normalApp', 'filterApp', 'formApp']);



var sessionApp = angular.module('sessionApp',[]);
var normalApp = angular.module('normalApp',[]);

var paymentApp = angular.module("paymentApp", ['ngAnimate', 'angularPayments', 'ui.router', 'filterApp', 'formApp', 'dropdownApp']);


