angular.module('webMenu')

.controller('homeCtrl', ['$scope', 'SideFoods', function($scope, SideFoods){
	$scope.name = 'John Smith';
	$scope.cash = true;
	$scope.address = '101 Main Street';

	$scope.sides = SideFoods.get_sides();
	$scope.drinks = SideFoods.get_drinks();
	$scope.toppings = SideFoods.get_toppings();
}]);

