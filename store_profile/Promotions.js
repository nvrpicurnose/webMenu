angular.module('webMenu')

.service('Promotions', function(){
	var promo_list = [
		{
			id:0,
			name: '2 Large Pizzas for $12.99',
			promo_type: 'custom',
			coupon_code: '2CANDINE',
			description: '',
			price: 12.99,
			current_size:"Medium",
			sizes: [
				{portion:"Small", promoprice: 9.99, drink_limit:0, side_limit:0, topping_limit:3},
				{portion:"Medium", promoprice: 10.99, drink_limit:1, side_limit:0, topping_limit:3},
				{portion:"Large", promoprice: 12.99, drink_limit:2, side_limit:1, topping_limit:3},
				{portion:"XLarge", promoprice: 13.99, drink_limit:3, side_limit:1, topping_limit:3},
				{portion:"Party", promoprice: 14.99, drink_limit:4, side_limit:2, topping_limit:3}],
			imageUrl:'http://www.omegapizza.ca/wp-content/uploads/2012/10/Fotolia_41104275_Subscription_Monthly_XXL.jpg',
			valid_foods: [9],
			addon_drinks: [],
			addon_sides: [],
			addon_toppings: [],
			mains_limit: 2,
			stackable: false,
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
				{id: 0, name:'Dipping Sauce', price:'0.99', link: ''},
				{id: 1, name:'Upgrade Drink Size', price:'0.99', link: ''}]},
		{
			id:1,
			name: 'Party Sized Bucket of Chicken',
			promo_type: 'custom',
			coupon_code: '2CANDINE',
			description: '',
			price: 16.99,
			current_size:"Large",
			sizes: [
				{portion:"Small 8pc", promoprice: 11.99, drink_limit:2, side_limit:1, topping_limit:0},
				{portion:"Medium 10pc", promoprice: 14.99, drink_limit:3, side_limit:1, topping_limit:0},
				{portion:"Large 12pc", promoprice: 16.99, drink_limit:4, side_limit:2, topping_limit:0},
				{portion:"XLarge 15pc", promoprice: 19.99, drink_limit:5, side_limit:3, topping_limit:0},
				{portion:"Party 20px", promoprice: 24.99, drink_limit:6, side_limit:4, topping_limit:2}],
			imageUrl:'http://www.kfc.ro/uploads/produse/buckets/mare_hot-bucket-1383642887.jpg',
			valid_foods: [10,11],
			addon_drinks: [],
			addon_sides: [],
			addon_toppings: [],
			mains_limit: 1,
			stackable: false,
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
				{id: 0, name:'Dipping Sauce', price:'0.99', link: ''},
				{id: 1, name:'Upgrade Drink Size', price:'0.99', link: ''}]}
	];
	return {
		get: function(){
			return promo_list;
		}
	}
});

