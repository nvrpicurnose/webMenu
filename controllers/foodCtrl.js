angular.module('webMenu')

.controller('foodCtrl', ['$scope', 'SideFoods', 'ShoppingCart', 'FoodOrder', function($scope, SideFoods, ShoppingCart, FoodOrder){
	$scope.drinks = SideFoods.get_drinks();
	$scope.sides = SideFoods.get_sides();
	$scope.toppings = SideFoods.get_toppings();
	$scope.food = FoodOrder.get();
	
	$scope.all = ShoppingCart.cartcontent();

}]);