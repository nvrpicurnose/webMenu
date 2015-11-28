angular.module('webMenu')

.controller('foodCtrl', ['$scope', 'SideFoods', 'ShoppingCart', 'FoodOrder', function($scope, SideFoods, ShoppingCart, FoodOrder){
$scope.food = FoodOrder.get();
	$scope.all_drinks = SideFoods.get_drinks();
	$scope.drinks = angular.copy($scope.all_drinks,$scope.drinks);
		$scope.all_sides = SideFoods.get_sides();
		$scope.sides = angular.copy($scope.all_sides,$scope.sides);
			$scope.all_toppings = SideFoods.get_toppings();
			$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);
	
	$scope.submitOrder = function(){
		$scope.food.drinks = $scope.drinks;
		$scope.food.sides = $scope.sides;
		$scope.food.toppings = $scope.toppings;

		ShoppingCart.add($scope.food);
	};

	$scope.only_this = FoodOrder.get();
	$scope.all_this = ShoppingCart.cartcontent();

}]);