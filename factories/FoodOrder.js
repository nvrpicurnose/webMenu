angular.module('webMenu')

.service('FoodOrder', function(){
	var selected_food = 'food';

	return {
		get: function(){
			return selected_food;
		},
		setfood: function(food){
			selected_food = food;
			return selected_food;
		},
		getid: function(){
			return selected_food.id;
		},
		add_drink: function(drink){
			drink.quantity = 1;
			selected_food.drinks.push(drink);
		},
		remove_drink: function(drink){
			drink.quantity =-1;
			selected_food.drinks.push(drink);
		}
	}
});