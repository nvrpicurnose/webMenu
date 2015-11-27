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

		// why is this not working?? even manually changing url to #/menu/1 will not property use ui.router
		.state('food', {
			url: '/menu/:id',
			templateUrl: 'templates/food_detail.html',
			controller: 'foodCtrl'
		});
}]);