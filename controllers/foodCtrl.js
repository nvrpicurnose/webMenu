angular.module('webMenu')

.controller('foodCtrl', ['$scope', 'SideFoods', 'ShoppingCart', 'FoodOrder', 'Coupons', function($scope, SideFoods, ShoppingCart, FoodOrder, Coupons){
// grab all the information
$scope.food = FoodOrder.get();
	$scope.all_drinks = SideFoods.get_drinks();
	$scope.drinks = angular.copy($scope.all_drinks,$scope.drinks);
		$scope.all_sides = SideFoods.get_sides();
		$scope.sides = angular.copy($scope.all_sides,$scope.sides);
			$scope.all_toppings = SideFoods.get_toppings();
			$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);
	// to go back to menu
	$scope.back = function(){
		window.location.assign('#/menu');
		console.log('back');
	};

	//applying any coupon codes
	$scope.applycoupon = function(couponcode, food){
		//checking for validity of coupon
		var valid_coupon = Coupons.valid_coupon(couponcode, food);
		if(valid_coupon == true){
			// actual retreival of coupon (promo) details if valid
			var coupon = Coupons.retreive_coupon(couponcode);

			// change the max limit for drinks, sides and toppings (if applicable). Also recalculates max limits
			$scope.max_drinks += coupon.add_drink_limit;
			$scope.max_sides += coupon.add_side_limit;
			$scope.max_toppings += coupon.add_topping_limit;
			$scope.calculate_drink();
			$scope.calculate_side();
			$scope.calculate_topping();

			// change the food price if applicable
			$scope.food.price -= coupon.food_discount_dollar;
			$scope.food.price -= ($scope.food.price*coupon.food_discount_percent);

			// for paid_addon coupons. will display popup box

			
			console.log(couponcode + ' is redeemable as ' + coupon.name);
		}else{
			console.log('The coupon code does not exist or must be entered with final order.');
		};
	};

	// to submit the order. Will save into a new food object that is passed to the ShoppingCart
	$scope.submitOrder = function(){
		$scope.food.drinks = $scope.drinks;
		$scope.food.sides = $scope.sides;
		$scope.food.toppings = $scope.toppings;
		alert('Your order was added to the cart');

		ShoppingCart.add($scope.food);
	};

	// to clear the submission
	$scope.clearfood = function(){
		$scope.drinks = angular.copy($scope.all_drinks,$scope.drinks);
		$scope.sides = angular.copy($scope.all_sides,$scope.sides);
		$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);
	};

	// to determine if combo. clicking will hide drinks,sides&toppings and clear all quantities
	$scope.combo = true;
	$scope.toggleCombo = function(){
		$scope.combo = !$scope.combo;
			$scope.drinks = angular.copy($scope.all_drinks,$scope.drinks);
			$scope.sides = angular.copy($scope.all_sides,$scope.sides);
			$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);
	};
	$scope.isCombo = function(){
		return $scope.combo;
	};

	// To set max drinks and disable form when reached
	$scope.max_drinks = $scope.food.max_drinks;
	$scope.maxed_drink = false;
	$scope.no_negatives = [];
	$scope.add_drink = function(drink){
		$scope.drinks[drink.id].quantity += 1;
		$scope.drinks[drink.id].no_negatives = false;
	};
	$scope.remove_drink = function(drink){
		if($scope.drinks[drink.id].quantity <1){
			$scope.drinks[drink.id].no_negatives = true;
		}else{
			$scope.drinks[drink.id].quantity -= 1;
		};
	};
	$scope.calculate_drink = function(){
		var current = 0;
		for(i=0;i<$scope.drinks.length;i++){
			current += $scope.drinks[i].quantity;
		};
		if(current>$scope.max_drinks -1){
			$scope.maxed_drink = true;
		}else{
			$scope.maxed_drink = false;
		};
	};

	// To set max sides and disable form when reached
	$scope.max_sides = $scope.food.max_sides;
	$scope.maxed_side = false;
	$scope.no_negatives = [];
	$scope.add_side = function(side){
		$scope.sides[side.id].quantity += 1;
		$scope.sides[side.id].no_negatives = false;
	};
	$scope.remove_side = function(side){
		if($scope.sides[side.id].quantity <1){
			$scope.sides[side.id].no_negatives = true;
		}else{
			$scope.sides[side.id].quantity -= 1;
		};
	};
	$scope.calculate_side = function(){
		var current = 0;
		for(i=0;i<$scope.sides.length;i++){
			current += $scope.sides[i].quantity;
		};
		if(current>$scope.max_sides -1){
			$scope.maxed_side = true;
		}else{
			$scope.maxed_side = false;
		};
	};

	// To set max toppings and disable form when reached
	$scope.max_toppings = $scope.food.max_toppings;
	$scope.maxed_topping = false;
	$scope.no_negatives = [];
	$scope.add_topping = function(topping){
		$scope.toppings[topping.id].quantity += 1;
		$scope.toppings[topping.id].no_negatives = false;
	};
	$scope.remove_topping = function(topping){
		if($scope.toppings[topping.id].quantity <1){
			$scope.toppings[topping.id].no_negatives = true;
		}else{
			$scope.toppings[topping.id].quantity -= 1;
		};
	};
	$scope.calculate_topping = function(){
		var current = 0;
		for(i=0;i<$scope.toppings.length;i++){
			current += $scope.toppings[i].quantity;
		};
		if(current>$scope.max_toppings -1){
			$scope.maxed_topping = true;
		}else{
			$scope.maxed_topping = false;
		};
	};

}]);