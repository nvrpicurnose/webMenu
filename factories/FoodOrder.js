angular.module('webMenu')

.factory('FoodOrder', function(){
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
		}
	}
});