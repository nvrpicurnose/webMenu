angular.module('webMenu')

.controller('foodCtrl', ['$scope', 'SideFoods', 'ShoppingCart', 'FoodOrder', 'Coupons', function($scope, SideFoods, ShoppingCart, FoodOrder, Coupons){
// grab all the information
$scope.food = FoodOrder.get();
$scope.upgrades = SideFoods.get_upgrades();
$scope.foodprice = FoodOrder.original_price(); //this allows for coupon price manipulation
$scope.used_coupons = [];
$scope.addons = [];
$scope.combo = true;
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

	//choosing the food item size
	$scope.sizes = $scope.food.sizes;
	// setting the size price
	$scope.change_size = function(size_selection){
		$scope.foodprice = size_selection;
	};
	// setting the size
	$scope.set_size = function(size){
		$scope.food.current_size = size.portion;
	};








	//applying any coupon codes
	$scope.applycoupon = function(couponcode, food){
		//check if this coupon has been used yet
		var used = false;
		for(c=0; c<$scope.used_coupons.length; c++){
			if($scope.used_coupons[c].coupon_code === couponcode){
				alert('This coupon ' + couponcode + ' has already been used.');
				used = true;
			};
		};

		// if coupon is not used yet, can can proceed
		if(used==false){
			//checking for validity of coupon code
			var valid_coupon = Coupons.valid_coupon(couponcode, food);
			if(valid_coupon == true){
				// actual retreival of coupon (promo) details if coupon code is valid
				var coupon = Coupons.retreive_coupon(couponcode);

				// change the max limit for drinks, sides and toppings (if applicable). Also recalculates max limits
				$scope.max_drinks += coupon.add_drink_limit;
				$scope.max_sides += coupon.add_side_limit;
				$scope.max_toppings += coupon.add_topping_limit;
				$scope.calculate_drink();
				$scope.calculate_side();
				$scope.calculate_topping();

				// change the food price if applicable
				$scope.foodprice -= coupon.food_discount_dollar;
				$scope.foodprice -= ($scope.food.price*coupon.food_discount_percent);

				// for paid_addon coupon on drinks and sides. will show hidden content
				if(coupon.addon_item == 'drink'){
					$scope.paidaddondrink = true;
				}else if(coupon.addon_item == 'side'){
					$scope.paidaddonside = true;
				};
				$scope.used_coupons.push(coupon);
				console.log(couponcode + ' is redeemable as ' + coupon.name);
			}else{
				console.log('The coupon code does not exist or must be entered with final order.');
			};
		};

		console.log($scope.used_coupons);
	};

	// clear coupons
	$scope.clear_coupons = function(){
		$scope.used_coupons = [];
		$scope.addons = [];
		$scope.foodprice = $scope.food.price;
	};

	// identify if there is a paid addon drink option, usually via coupon. Toggles ng-hide on addon div
	$scope.paidaddondrink = false;
	$scope.isPaidAddonDrink = function(){
		return $scope.paidaddondrink;
	};
	// exits the addon div by toggling ng-hide. will also empty the entire addons array (must fix so it only removes the addon drink)
	$scope.exitPaidAddonDrink = function(){
		$scope.addons = [];
		$scope.used_coupons = [];
		$scope.paidaddondrink = false;
	};
	// adds the addon drink to the order. Does not count towards the drink limit.
	$scope.add_paidDrink = function(couponcode, drink){
			var modified_drink = drink;
			var org_drink = drink;
			var retreived_coupon = Coupons.retreive_coupon(couponcode);
			modified_drink.indv_price -= org_drink.indv_price*retreived_coupon.addon_discount_percent;
			modified_drink.indv_price -= retreived_coupon.addon_discount_dollar;
			$scope.addons.push(modified_drink);
			$scope.paidaddondrink = false;
			console.log($scope.addons);
			console.log(modified_drink.indv_price);
	};

	// identify if there is a paid addon side option, usually via coupon. Toggles ng-hide on addon div
	$scope.paidaddonside = false;
	$scope.isPaidAddonSide = function(){
		return $scope.paidaddonside;
	};
	// exits the addon div by toggling ng-hide. will also empty the entire addons array (must fix so it only removes the addon side)
	$scope.exitPaidAddonSide = function(){
		$scope.addons = [];
		$scope.used_coupons = [];
		$scope.paidaddonside = false;
	};
	// adds the addon side to the order. Does not count towards the side limit.
	$scope.add_paidSide = function(couponcode, side){
		var modified_side = side;
		var org_side = side;
		var retreived_coupon = Coupons.retreive_coupon(couponcode);
		modified_side.indv_price -= org_side.indv_price*retreived_coupon.addon_discount_percent;
		modified_side.indv_price -= retreived_coupon.addon_discount_dollar;
		$scope.addons.push(modified_side);
		$scope.paidaddonside = false;
		console.log($scope.addons);
		console.log(modified_side.indv_price);
	};













	// to submit the order. Will save into a new food object that is passed to the ShoppingCart
	$scope.submitOrder = function(){
		$scope.food.drinks = $scope.drinks;
		$scope.food.sides = $scope.sides;
		$scope.food.toppings = $scope.toppings;
		$scope.food.addons = $scope.addons;
		$scope.food.price = $scope.foodprice;
		$scope.food.combo = $scope.combo;
		$scope.finalfood = angular.copy($scope.food, $scope.finalfood);

		ShoppingCart.add($scope.finalfood);
		alert('Your order was added to the cart');
		console.log($scope.finalfood.price);
		$scope.clearfood();
	};

	// to clear the submission
	$scope.clearfood = function(){
		$scope.food = FoodOrder.get();
		$scope.foodprice = FoodOrder.original_price();
		$scope.size_selection = '';
		$scope.finalfood = '';
		$scope.used_coupons = [];
		$scope.addons = [];
			$scope.all_drinks = SideFoods.get_drinks();
			$scope.drinks = angular.copy($scope.all_drinks,$scope.drinks);
				$scope.all_sides = SideFoods.get_sides();
				$scope.sides = angular.copy($scope.all_sides,$scope.sides);
					$scope.all_toppings = SideFoods.get_toppings();
					$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);
		$scope.maxed_drink = false;
		$scope.maxed_side = false;
		$scope.maxed_topping = false;
		$scope.exitPaidAddonDrink();
		$scope.exitPaidAddonSide();
	};

	// to determine if combo. clicking will hide drinks,sides&toppings and clear all quantities
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
	$scope.add_drink = function(drink){
		if($scope.combo==true){
			$scope.drinks[drink.id].indv_price = 0;
		}
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
	$scope.add_side = function(side){
		if($scope.combo==true){
			$scope.sides[side.id].indv_price = 0;
		}
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

	// to upgrade drinks or sides to a larger size
	$scope.upgrade_addon = function(upgrade){
		$scope.addons.push(upgrade);
	};
}]);