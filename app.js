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
			url: '/menu',
			templateUrl: 'templates/menu.html',
			controller: 'menuCtrl'
		})
		.state('cart', {
			url: '/cart',
			templateUrl: 'templates/cart.html',
			controller: 'cartCtrl'
		})
		.state('food', {
			url: '/menu/:id',
			templateUrl: 'templates/food_detail.html',
			controller: 'foodCtrl'
		})
		.state('promo', {
			url: '/promo',
			templateUrl: 'templates/promo.html',
			controller: 'promoCtrl'
		})
		.state('special', {
			url: '/promo/:id',
			templateUrl: 'templates/special.html',
			controller: 'specialCtrl'
		});
}]);