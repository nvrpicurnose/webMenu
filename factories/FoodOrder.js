angular.module('webMenu')

.service('FoodOrder', function(){
	var selected_food = 'food';
	var selected_promo = 'promo';

	return {
		get: function(){
			return selected_food;
		},
		getpromo: function(){
			return selected_promo;
		},
		setfood: function(food){
			selected_food = food;
			return selected_food;
		},
		getid: function(){
			return selected_food.id;
		},
		setpromo: function(promo){
			selected_promo = promo;
			return selected_promo;
		},
		getpromoid: function(){
			return selected_promo.id;
		}
	}
});