angular.module('webMenu')

.controller('homeCtrl', ['$scope', 'SideFoods', 'StoreProfile', function($scope, SideFoods, StoreProfile){
	$scope.sides = SideFoods.get_sides();
	$scope.drinks = SideFoods.get_drinks();
	$scope.toppings = SideFoods.get_toppings();

	$scope.store = StoreProfile.get();
	$scope.days = $scope.store.hours_of_op;
}]);

