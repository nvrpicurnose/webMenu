angular.module('webMenu')

.controller('homeCtrl', ['$scope', 'SideFoods', 'StoreProfile', 'Promotions', function($scope, SideFoods, StoreProfile, Promotions){
	$scope.sides = SideFoods.get_sides();
	$scope.drinks = SideFoods.get_drinks();
	$scope.toppings = SideFoods.get_toppings();

	$scope.store = StoreProfile.get();
	$scope.days = $scope.store.hours_of_op;

	$scope.promos = Promotions.get();
}]);

