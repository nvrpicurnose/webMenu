var webMenu = angular.module('webMenu', ['ui.router']);

webMenu.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.state('menu', {
			url: '/',
			templateUrl: 'templates/menu.html',
			controller: 'menuCtrl'
		})
		.state('cart', {
			url: '/',
			templateUrl: 'templates/cart.html',
			controller: 'cartCtrl'
		});
}]);