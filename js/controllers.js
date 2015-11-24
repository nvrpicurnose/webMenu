var webMenu = angular.module('webMenu');

webMenu.controller('homeCtrl', ['$scope', 'SideFoods', function($scope, SideFoods){
	$scope.name = 'John Smith';
	$scope.cash = true;
	$scope.address = '101 Main Street';

	$scope.sides = SideFoods.get_sides();
	$scope.drinks = SideFoods.get_drinks();
	$scope.toppings = SideFoods.get_toppings();
}]);

webMenu.controller('menuCtrl', ['$scope', 'Foods', 'ShoppingCart', function($scope, Foods, ShoppingCart){
	$scope.foods = Foods.get();

	$scope.add = function(food){
		ShoppingCart.add(food);
	};

	$scope.cartcontent = function(){
		return ShoppingCart.cartcontent();
	};
}]);

webMenu.controller('cartCtrl', ['$scope', 'ShoppingCart', function($scope, ShoppingCart){
	$scope.cartcontent = function(){
		return ShoppingCart.cartcontent();
	};

	$scope.subtotal = function(){
		return ShoppingCart.subtotal();
	};
	$scope.tax = function(){
		return ShoppingCart.tax();
	};
	$scope.total = function(){
		return ShoppingCart.total();
	};
	$scope.remove = function(food){
		ShoppingCart.remove(food);
	};

	$scope.cart = ShoppingCart.cartcontent();
}]);