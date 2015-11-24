var webMenu = angular.module('webMenu');

webMenu.factory('Foods', function(){
	var allfoods = [
		{name:'Butter Chicken',
			price: 7.99,
			veggie: false,
			imageUrl: 'http://www.akbarsown.com/wp-content/uploads/2015/05/butter-chicken-1.jpg',
			description: 'Delicious butter chicken marinated in an authentic Indian sauce from Uttar Pradesh province. Enjoy with a side of rice and salad.',
			onsale: false},
		{name:'Kebab & Rice',
			price: 8.99,
			veggie: false,
			imageUrl: 'http://www.globeholidays.net/Africa/Egypt/Lower_Egypt/Media/Cairo_Kebab_5.jpg',
			description: 'Kebab is delicious and kebab is nutricious. Sure its just meat on a stick but it tastes so good. Enjoy with a side of rice and salad.',
			onsale: false},
		{name:'Tiki Masala',
			price: 7.99,
			veggie: false,
			imageUrl: 'http://www.tablefortwoblog.com/wp-content/uploads/2012/01/chicken-tikka-masala.jpg',
			description: 'Tiki Masala is a real treat for people who dont eat much ethnic food. I personally dont know what it is but Ill know when I see picture.',
			onsale: false},
		{name:'Fish Curry',
			price: 9.99,
			veggie: false,
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Fish_Curry.JPG/1024px-Fish_Curry.JPG',
			description: 'Fish curry is so good you dont understand. I catch my own fish but you can buy local fresh. Enjoy with a side of rice and salad.',
			onsale: false},
		{name:'Tandoori Chicken',
			price: 7.99,
			veggie: false,
			imageUrl: 'http://www.silverspoononline.com/wp-content/uploads/2013/06/sv.jpg',
			description: 'Tandoori chicken, the infamous and delicious. This is like the brown version of Kung Pow Chicken. Enjoy with a side of rice and salad.',
			onsale: false},
		{name:'Falafel',
			price: 6.99,
			veggie: true,
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Falafel_balls.jpg',
			description: 'Falafel is like a meatball but its made of chick peas- no meat. Deep fry for a golden bite of hearty goodness. Wrap it up in Shwarama style.',
			onsale: false},
		{name:'Goat Leg & Rice',
			price: 9.99,
			veggie: false,
			imageUrl: 'http://www.greatcurryrecipes.net/wp-content/uploads/2013/02/goat1.jpg',
			description: 'Goat Leg curry served with a generous heaping of rice. Those little carb sticks just soak up that delicious curry. Enjoy with a side of rice and salad.',
			onsale: false},
		{name:'Shwarama & Fries',
			price: 8.99,
			veggie: false,
			imageUrl: 'http://www.mezzalebanesekitchen.ca/img/photo/Shawarma%20Wrap%20%20Fries.jpg',
			description: 'Classic! Shwarama is my to-go food if I want some deep rich meaty taste with fresh veggies and aromatic middle eastern sauces. Im so hungry right now.',
			onsale: false},
		{name:'Spicy Seafood Salad',
			price: 10.99,
			veggie: false,
			imageUrl: 'https://lh3.googleusercontent.com/RBOLDJ8qoZ--Vv7D7i9yevw24C5XBQxBnDK8C8nIRiHz7Choqt-PGbyq8vyHipP89Igbq1P7ttdbY7a2Zcv8j5joDaCI4FMovq1G3F7HPqHcPjHGrod7P3tcVQ',
			description: 'Now this is something you dont see often. Delicious fresh shrimp, surf clam, tipilia fillet and calamari soaked over a bed of veggies.',
			onsale: false}
		];

	return {
		get: function(){
			return allfoods;
		}
	}
});

webMenu.factory('ShoppingCart', function(){
	var shopcart = [];
	var tax = 0;
	var subTotal = 0;
	var total = 0;

	return {
		add: function(food){
			shopcart.push(food);
		},
		remove: function(food){
			shopcart.splice(food.$index,1)
		},
		cartcontent: function(){
			return shopcart;
		},
		subtotal: function(){
			var subtotal = 0;
			for(i=0; i<shopcart.length; i++){
				subtotal += shopcart[i].price;
			}
			subTotal = subtotal;
			return subtotal;
		},
		tax: function(){
			tax = subTotal * 0.13;
			return tax;
		},
		total: function(){
			total = subTotal+tax;
			return total;
		}
	}
});

webMenu.factory('SideFoods', function(){
	var sides = [
		{name:'Fries', indv_price: 2.99, imageUrl:'http://maximizedlivingdrpattison.com/Media/DrMorganPattison/images/French_fries.jpg'},
		{name:'Rice', indv_price: 2.99, imageUrl:'http://foodpictures.mobi/wp-content/uploads/indian-saffron-rice-2.'},
		{name:'Naan', indv_price: 2.99, imageUrl:'http://www.naanspicy.com/naan2.jpg'},
		{name:'Salad', indv_price: 2.99, imageUrl:'http://www.cbc.ca/inthekitchen/assets_c/2011/11/Salad2026-thumb-596x350-136535.jpg'}
	];

	var drinks = [
		{name:'Coke', indv_price: 0.99, imageUrl:'http://i.dailymail.co.uk/i/pix/2014/09/16/1410863991831_wps_2_D5G3W8_Coca_Cola_Can_Coke.jpg'},
		{name:'Root Beer', indv_price: 0.99, imageUrl:'http://drinks.seriouseats.com/images/20101028-rootbeer-aw.jpg'},
		{name:'Sprite', indv_price: 0.99, imageUrl:'http://www.napoletanapizza.com/image/cache/data/product/drinks/sprite_s-500x500.png'},
		{name:'Milkshake', indv_price: 3.99, imageUrl:'http://www.pralsa.com/upfiles/productes/A7354.jpg'},
		{name:'Smoothie', indv_price: 2.99, imageUrl:'http://static.abbottnutrition.com/cms/Pediasure2012/IMAGES/fresh-fruit-smoothie.png'},
		{name:'Bottled Water', indv_price: 1.29, imageUrl:'http://scene7.targetimg1.com/is/image/Target/12959284?wid=480&hei=480'},
		{name:'Mango Juice', indv_price: 1.99, imageUrl:'http://villagequalityproducts.com/328/libbys-mango-juice-bottle.jpg'}
	];

	var toppings = [
		{name:'lettace', type:'topping', indv_price: 0, imageUrl:'http://www.metro-farms.com/wp-content/uploads/2015/05/ButterheadLettuce-00.jpg'},
		{name:'tomato', type:'topping', indv_price: 0, imageUrl:'http://www.buyfruit.com.au/images/P/CherryTomatoes__54113.jpg'},
		{name:'onion', type:'topping', indv_price: 0, imageUrl:'http://ichef.bbci.co.uk/news/660/media/images/80896000/jpg/_80896768_red-onion-think624.jpg'},
		{name:'pickles', type:'topping', indv_price: 0, imageUrl:'http://images.wisegeek.com/sliced-pickles.jpg'},
		{name:'beets', type:'topping', indv_price: 0, imageUrl:'https://findingtimeforcooking.files.wordpress.com/2013/10/beet-leek-feta-frittata-beets-chopped.jpg'},
		{name:'olives', type:'topping', indv_price: 0, imageUrl:'http://img2.timeinc.net/health/img/mag/2013/03/cocktail-olives-400x400.jpg'},
		{name:'peppers', type:'topping', indv_price: 0, imageUrl:'http://www.chatelaine.com/wp-content/uploads/2012/07/be4126574237985f63d42dee79e5-603x660.jpg'},
		{name:'anchovies', type:'topping', indv_price: 0.99, imageUrl:'http://images1.phoenixnewtimes.com/imager/u/original/6547316/brown_tinned_anchovies.jpg'},

		{name:'tahini', type:'sauce', indv_price: 0, imageUrl:'http://www.cbc.ca/inthekitchen/assets_c/2012/11/Tahini562-thumb-596x350-247333.jpg'},
		{name:'hummus', type:'sauce', indv_price: 0, imageUrl:'http://files.foodess.com/image/upload/MTMxNTk1NDc2Nzg4MTAzMTc4.jpg'},
		{name:'mayo', type:'sauce', indv_price: 0, imageUrl:'http://www.mentalwellnesscounseling.com/wp-content/uploads/2012/04/mayo-money-traverse-city-counselor.jpg'},
		{name:'garlic sauce', type:'sauce', indv_price: 0, imageUrl:'http://www.jocooks.com/wp-content/uploads/2012/04/roasted-potatoes-with-garlic-sauce-1-2.jpg'},
		{name:'hot sauce', type:'sauce', indv_price: 0, imageUrl:'http://crossvillenews1st.com/wp-content/uploads/2014/07/franks-red-hot-sauce.jpg'},
		{name:'guacamole', type:'sauce', indv_price: 0.99, imageUrl:'http://162.61.226.249/PicOriginal/P63482612080919_5.jpg'},
	];

	return {
		get_sides: function(){
			return sides;
		},
		get_drinks: function(){
			return drinks;
		},
		get_toppings: function(){
			return toppings;
		}
	}
});	