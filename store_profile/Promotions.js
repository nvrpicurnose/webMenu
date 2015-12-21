angular.module('webMenu')

.service('Promotions', function(){
	var promo_list = [
		{
			name: '2 Large Pizzas for $12.99',
			promo_type: 'custom_combo',
			coupon_code: '2CANDINE',
			description: '',
			imageUrl:'http://www.omegapizza.ca/wp-content/uploads/2012/10/Fotolia_41104275_Subscription_Monthly_XXL.jpg',
			valid_foods: [1,3,4,5],
			addon_drinks: [],
				drink_limit: 2,
			addon_sides: [],
				side_limit: 1,
			addon_toppings: [],
				topping_limit: 8,
			price: 12.99,
			discount: 0,
			food_quantity: 2,
			pickup_only: true,
			promo_times: [
				{day: 'Monday', start: 10, end: 21},
				{day: 'Tuesday', start: 10, end: 21},
				{day: 'Wednesday', start: 10, end: 21},
				{day: 'Thursday', start: 10, end: 21},
				{day: 'Friday', start: 10, end: 21},
				{day: 'Saturday', start: 10, end: 21},
				{day: 'Sunday', start: 10, end: 21}],
			upgrades: [
				{id: 0, name:'Extra Side', price:'1.99', link: ''},
				{id: 1, name:'Upgrade Drink Size', price:'0.99', link: ''}]},
		{
			name: 'Party Sized Package',
			promo_type: 'custom_combo',
			coupon_code: 'PARTY',
			description: '',
			imageUrl:'http://www.kfc.ro/uploads/produse/buckets/mare_hot-bucket-1383642887.jpg',
			valid_foods: [1,3,4,5],
			addon_drinks: [],
				drink_limit: 1,
			addon_sides: [],
				side_limit: 3,
			addon_toppings: [],
				topping_limit: 8,
			price: 24.99,
			discount: 0,
			pickup_only: false,
			promo_times: [
				{day: 'Monday', start: 10, end: 21},
				{day: 'Tuesday', start: 10, end: 21},
				{day: 'Wednesday', start: 10, end: 21},
				{day: 'Thursday', start: 10, end: 21},
				{day: 'Friday', start: 10, end: 21},
				{day: 'Saturday', start: 10, end: 21},
				{day: 'Sunday', start: 10, end: 21}],
			upgrades: [
				{id: 0, name:'Extra Side', price:'1.99', link: ''},
				{id: 1, name:'Upgrade Drink Size', price:'0.99', link: ''}]
		}
	];
	return {
		get: function(){
			return promo_list;
		}
	}
});