angular.module('webMenu')

.service('Coupons', function(){
	var coupon_list = [
		{
			name: '50% off select Combos',
			promo_type: 'discount',
			coupon_code: '50%DISC',
			description: '',
			imageUrl:'https://img.grouponcdn.com/deal/u8CRbgNT1tfTr4DTcABE/HK-2048x1229/v1/c700x420.jpg',
			valid_foods: [1,3,4,5],
			add_drink_limit: 0,
			add_side_limit: 0,
			add_topping_limit: 0,
			food_discount_dollar: 0,
			food_discount_percent: 0.5,
			addon_item: 'none',
			addon_discount_percent: 0,
			addon_discount_dollar: 0,
			pickup_only: true,
			stackable: false,
			promo_times: [
				{day: 'Monday', start: 10, end: 21},
				{day: 'Tuesday', start: 10, end: 21},
				{day: 'Wednesday', start: 10, end: 21},
				{day: 'Thursday', start: 10, end: 21},
				{day: 'Friday', start: 10, end: 21},
				{day: 'Saturday', start: 10, end: 21},
				{day: 'Sunday', start: 10, end: 21}]},
		{
			name: '$3 off select Combos',
			promo_type: 'discount',
			coupon_code: '$3DISC',
			description: '',
			imageUrl:'http://blazingonion.com/mobile/images/OnionRings-L.jpg',
			valid_foods: [1,3,4,5],
			add_drink_limit: 0,
			add_side_limit: 0,
			add_topping_limit: 0,
			food_discount_dollar: 3,
			food_discount_percent: 0,
			addon_item: 'none',
			addon_discount_percent: 0,
			addon_discount_dollar: 0,
			pickup_only: true,
			stackable: false,
			promo_times: [
				{day: 'Monday', start: 10, end: 21},
				{day: 'Tuesday', start: 10, end: 21},
				{day: 'Wednesday', start: 10, end: 21},
				{day: 'Thursday', start: 10, end: 21},
				{day: 'Friday', start: 10, end: 21},
				{day: 'Saturday', start: 10, end: 21},
				{day: 'Sunday', start: 10, end: 21}]},
		{
			name: 'Free 2 Extra Toppings',
			promo_type: 'free_addon',
			coupon_code: 'FREETOPS',
			description: '',
			imageUrl:'http://162.61.226.249/PicOriginal/6609TheOriginalPotatoSalad2.jpg',
			valid_foods: [1,3,4,5],
			add_drink_limit: 0,
			add_side_limit: 0,
			add_topping_limit: 2,
			food_discount_dollar: 0,
			food_discount_percent: 0,
			addon_item: 'topping',
			addon_discount_percent: 1,
			addon_discount_dollar: 0,
			pickup_only: true,
			stackable: false,
			promo_times: [
				{day: 'Monday', start: 10, end: 21},
				{day: 'Tuesday', start: 10, end: 21},
				{day: 'Wednesday', start: 10, end: 21},
				{day: 'Thursday', start: 10, end: 21},
				{day: 'Friday', start: 10, end: 21},
				{day: 'Saturday', start: 10, end: 21},
				{day: 'Sunday', start: 10, end: 21}]},
		{
			name: '$1 Drink',
			promo_type: 'paid_addon',
			coupon_code: '$1DRINK',
			description: '',
			imageUrl:'http://www.mcdonalds.ca/content/dam/Canada/en/Promo/2014-DDD/imgs/coke.png',
			valid_foods: [1,3,4,5],
			add_drink_limit: 0,
			add_side_limit: 0,
			add_topping_limit: 0,
			food_discount_dollar: 0,
			food_discount_percent: 0,
			addon_item: 'drink',
			addon_discount_percent: 0,
			addon_discount_dollar: 1,
			pickup_only: true,
			stackable: false,
			promo_times: [
				{day: 'Monday', start: 10, end: 21},
				{day: 'Tuesday', start: 10, end: 21},
				{day: 'Wednesday', start: 10, end: 21},
				{day: 'Thursday', start: 10, end: 21},
				{day: 'Friday', start: 10, end: 21},
				{day: 'Saturday', start: 10, end: 21},
				{day: 'Sunday', start: 10, end: 21}]},
		{
			name: '50% Side',
			promo_type: 'paid_addon',
			coupon_code: '50%SIDE',
			description: '',
			imageUrl:'http://hostedmedia.reimanpub.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg',
			valid_foods: [1,3,4,5],
			add_drink_limit: 0,
			add_side_limit: 0,
			add_topping_limit: 0,
			food_discount_dollar: 0,
			food_discount_percent: 0,
			addon_item: 'side',
			addon_discount_percent: 0.5,
			addon_discount_dollar: 0,
			pickup_only: true,
			stackable: false,
			promo_times: [
				{day: 'Monday', start: 10, end: 21},
				{day: 'Tuesday', start: 10, end: 21},
				{day: 'Wednesday', start: 10, end: 21},
				{day: 'Thursday', start: 10, end: 21},
				{day: 'Friday', start: 10, end: 21},
				{day: 'Saturday', start: 10, end: 21},
				{day: 'Sunday', start: 10, end: 21}]
		}
	];
	return {
		get: function(){
			return coupon_list;
		},
		//checks if the couponcode entered is valid
		valid_coupon: function(couponcode, food){
			var validity = false;
			var exists = false;
			var applicable = false;
			// Condition #1: Checks if couponcode exists
			for(i=0; i<coupon_list.length; i++){
				if(coupon_list[i].coupon_code == couponcode){
					exists = true;
						// Condition #2: check if this coupon is applicable to this food
						for(k=0; k<coupon_list[i].valid_foods.length; k++){
							if(coupon_list[i].valid_foods[k] == food.id){
								applicable = true;
								break;
							}
						};
					break;
				}
			};
			// if both conditions are met, than this coupon is valid
			if(exists == true && applicable == true){
				validity = true;
				return validity;
			}
		},
		//retreives the details of the couponcode if valid (see foodCtrl for logical progression)
		retreive_coupon: function(couponcode){
			var coupon = '';
			for(i=0; i<coupon_list.length; i++){
				if(coupon_list[i].coupon_code == couponcode){
					coupon = coupon_list[i];
					break;
				}
			}
			return coupon;
		}
	}
});