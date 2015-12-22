angular.module('webMenu')

.controller('specialCtrl', ['$scope', 'SideFoods', 'ShoppingCart', 'FoodOrder', 'Foods', 'Coupons', function($scope, SideFoods, ShoppingCart, FoodOrder, Foods, Coupons){
	$scope.promo = FoodOrder.getpromo();//retreive promotional item selected
	$scope.allfoods = Foods.get();
	$scope.applicable_foods = $scope.promo.valid_foods; // shows which foods this promo is valid on
	$scope.upgrades = $scope.promo.upgrades // retreives upgrades from Promo item
	$scope.promoprice = FoodOrder.originalpromo_price(); //this allows for coupon price manipulation
	$scope.chosen_size = 1; // which size was chosen
	$scope.food_quantity = $scope.promo.mains_limit; // limit to how many mains are included in this promo
	$scope.used_coupons = [];
	$scope.addons = [];
		$scope.all_drinks = SideFoods.get_drinks();
		$scope.drinks = angular.copy($scope.all_drinks,$scope.drinks);
			$scope.all_sides = SideFoods.get_sides();
			$scope.sides = angular.copy($scope.all_sides,$scope.sides);
				$scope.all_toppings = SideFoods.get_toppings();
				$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);

	//to go back to the promos page
	$scope.back = function(){
		window.location.assign('#/promo');
		console.log('back');
	};

	//IIFE immediately invoked function expression. used to build an array from $scope.applicable_foods
	$scope.applicable_foods_array = [];
	(function(){
		for(y=0;y<$scope.applicable_foods.length;y++){
			var validfood = $scope.allfoods[$scope.applicable_foods[y]]
			$scope.applicable_foods_array.push(validfood);
		};
	})();

	//choosing the promo item size
	$scope.sizes = $scope.promo.sizes;
	// setting the size price
	$scope.change_size = function(size_selection){
		$scope.promoprice = size_selection.promoprice;
			for(z=0;z<$scope.sizes.length;z++){
				if($scope.sizes[z]==size_selection){
					$scope.chosen_size = z;
				}
			}
		$scope.promo.current_size = size_selection.portion;

		//to reset the max drinks/sides/toppings and calculate();
		$scope.max_drinks = $scope.promo.sizes[$scope.chosen_size].drink_limit;
		$scope.drinks = angular.copy($scope.all_drinks,$scope.drinks);
		$scope.calculate_drink();
		$scope.max_sides = $scope.promo.sizes[$scope.chosen_size].side_limit;
		$scope.sides = angular.copy($scope.all_sides,$scope.sides);
		$scope.calculate_side();
		$scope.max_sides = $scope.promo.sizes[$scope.chosen_size].topping_limit;
		$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);
		$scope.calculate_topping();
	};


	//choosing the food item
	$scope.change_food = function(chosen_food_promo){
		$scope.food = $scope.chosen_food_promo;
		$scope.mains = [];
		for(b=0; b<$scope.food_quantity;b++){
			$scope.mains[b] = $scope.food;
		};
	};









	//applying any coupon codes
	$scope.applycoupon = function(couponcode, promo){
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
			var valid_coupon = Coupons.valid_coupon_promo(couponcode, promo);
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

				// change the promo price if applicable
				$scope.promoprice -= coupon.food_discount_dollar;
				$scope.promoprice -= ($scope.promo.price*coupon.food_discount_percent);

				// for paid_addon coupon on drinks and sides. will show hidden content
				if(coupon.addon_item == 'drink'){
					$scope.paidaddondrink = true;
				}else if(coupon.addon_item == 'side'){
					$scope.paidaddonside = true;
				};
				$scope.used_coupons.push(coupon);
				alert(couponcode + ' is redeemable as ' + coupon.name);
			}else{
				alert('The coupon code does not exist or must be entered with final order.');
			};
		};

		console.log($scope.used_coupons);
	};

	// clear coupons
	$scope.clear_coupons = function(){
		$scope.used_coupons = [];
		$scope.addons = [];
		// this should change to the selected promo size's price
		$scope.promoprice = $scope.promo.price;
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









	// to submit the promo order
	$scope.submitPromo = function(){
		$scope.promo_bundle = {name:'', price:0, size:'', drinks:[], sides:[], mains:[], addons:[]};
			$scope.promo_bundle.name = angular.copy($scope.promo.name, $scope.promo_bundle.name);
			$scope.promo_bundle.price = angular.copy($scope.promo.price, $scope.promo_bundle.price);
			$scope.promo_bundle.size = angular.copy($scope.promo.current_size, $scope.promo_bundle.size);
			$scope.promo_bundle.drinks = angular.copy($scope.drinks, $scope.promo_bundle.drinks);
			$scope.promo_bundle.sides = angular.copy($scope.sides, $scope.promo_bundle.sides);
			$scope.promo_bundle.mains = angular.copy($scope.mains, $scope.promo_bundle.mains);
			$scope.promo_bundle.addons = angular.copy($scope.addons, $scope.promo_bundle.addons);
			$scope.finalpromo = angular.copy($scope.promo_bundle, $scope.finalpromo);
		ShoppingCart.addpromo($scope.finalpromo);
		alert('Your order was added to the cart');
		$scope.clearpromo();
	};

	// to clear the submission
	$scope.clearpromo = function(){
		$scope.promo = FoodOrder.getpromo();
		$scope.promoprice = FoodOrder.originalpromo_price();
		$scope.size_selection = '';
		$scope.finalpromo = '';
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

	







	// To set max drinks and disable form when reached
	$scope.max_drinks = $scope.promo.sizes[$scope.chosen_size].drink_limit;
	$scope.maxed_drink = false;
	$scope.add_drink = function(drink){
		$scope.drinks[drink.id].indv_price = 0;
		$scope.drinks[drink.id].quantity += 1;
		$scope.drinks[drink.id].no_negatives = false;
		console.log($scope.max_drinks);
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
	$scope.max_sides = $scope.promo.sizes[$scope.chosen_size].side_limit;
	$scope.maxed_side = false;
	$scope.add_side = function(side){
		$scope.sides[side.id].indv_price = 0;
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
	$scope.max_toppings = $scope.promo.sizes[$scope.chosen_size].topping_limit;
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


	// to save this main_food into the mains[0] array
	$scope.next_food_counter = 0;
	$scope.next_food_disabled = false; // if this is true, the next_food button will be disabled
	$scope.next_food = function(){
		$scope.current_toppings = angular.copy($scope.toppings, $scope.current_toppings);
		$scope.mains[$scope.next_food_counter].toppings = $scope.current_toppings;
		//increments the next_food_counter
		$scope.next_food_counter++;
		//resets toppings for next main_food
		$scope.all_toppings = SideFoods.get_toppings();
		$scope.toppings = angular.copy($scope.all_toppings,$scope.toppings);
		$scope.calculate_topping();
		//will check if the main_food has reached it max limit as defined by $scope.food_quantity
		if($scope.next_food_counter>=$scope.food_quantity){
			$scope.next_food_disabled = true;
		};
	};

}]);