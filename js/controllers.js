var webMenu = angular.module('webMenu');

webMenu.controller('homeCtrl', ['$scope', 'SideFoods', function($scope, SideFoods){
	$scope.name = 'John Smith';
	$scope.cash = true;
	$scope.address = '101 Main Street';

	$scope.sides = SideFoods.get_sides();
	$scope.drinks = SideFoods.get_drinks();
	$scope.toppings = SideFoods.get_toppings();
}]);

webMenu.controller('menuCtrl', ['$scope', 'Foods', 'FoodSelected',  function($scope, Foods, FoodSelected){
	$scope.foods = Foods.get();

	$scope.enterFood = function(food){
		FoodSelected.setfood(food);
		$scope.food_id = FoodSelected.getid();
		window.location.assign('#/menu/'+ $scope.food_id);
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

webMenu.controller('foodCtrl', ['$scope', 'SideFoods', 'ShoppingCart', 'FoodSelected', function($scope, SideFoods, ShoppingCart, FoodSelected){
	$scope.drinks = SideFoods.get_drinks();
	$scope.sides = SideFoods.get_sides();
	$scope.toppings = SideFoods.get_toppings();
	$scope.food = FoodSelected.get();
	$scope.chosen_drinks = [];
	$scope.all = ShoppingCart.cartcontent();

	// for adding only this item (non-combo)
	$scope.add = function(food){
		$scope.chosen_drinks.push($scope.select_drink);
		food.drinks = $scope.chosen_drinks;
		food.sides = $scope.sides;
		food.toppings = $scope.toppings;
		ShoppingCart.add(food);
	};

	// for adding combos of this item (eg. burger with fries+drink)
	$scope.isCombo = function(food){
		food.combo = !food.combo;
	};

	$scope.cartcontent = function(){
		return ShoppingCart.cartcontent();
	};
}]);