angular.module('webMenu')

.service('SideFoods', function(){
	var sides = [
		{name:'Fries', id:0, indv_price: 2.99, quantity:0, imageUrl:'http://maximizedlivingdrpattison.com/Media/DrMorganPattison/images/French_fries.jpg'},
		{name:'Rice', id:1, indv_price: 2.99, quantity:0, imageUrl:'http://foodpictures.mobi/wp-content/uploads/indian-saffron-rice-2.'},
		{name:'Naan', id:2, indv_price: 2.99, quantity:0, imageUrl:'http://www.naanspicy.com/naan2.jpg'},
		{name:'Salad', id:3, indv_price: 2.99, quantity:0, imageUrl:'http://www.cbc.ca/inthekitchen/assets_c/2011/11/Salad2026-thumb-596x350-136535.jpg'}
	];

	var drinks = [
		{name:'Coke', id:0, indv_price: 0.99, quantity:0, imageUrl:'http://i.dailymail.co.uk/i/pix/2014/09/16/1410863991831_wps_2_D5G3W8_Coca_Cola_Can_Coke.jpg'},
		{name:'Root Beer', id:1, indv_price: 0.99, quantity:0, imageUrl:'http://drinks.seriouseats.com/images/20101028-rootbeer-aw.jpg'},
		{name:'Sprite', id:2, indv_price: 0.99, quantity:0, imageUrl:'http://www.napoletanapizza.com/image/cache/data/product/drinks/sprite_s-500x500.png'},
		{name:'Milkshake', id:3, indv_price: 3.99, quantity:0, imageUrl:'http://www.pralsa.com/upfiles/productes/A7354.jpg'},
		{name:'Smoothie', id:4, indv_price: 2.99, quantity:0, imageUrl:'http://static.abbottnutrition.com/cms/Pediasure2012/IMAGES/fresh-fruit-smoothie.png'},
		{name:'Bottled Water', id:5, indv_price: 1.29, quantity:0, imageUrl:'http://scene7.targetimg1.com/is/image/Target/12959284?wid=480&hei=480'},
		{name:'Mango Juice', id:6, indv_price: 1.99, quantity:0, imageUrl:'http://villagequalityproducts.com/328/libbys-mango-juice-bottle.jpg'}
	];

	var toppings = [
		{name:'lettace', id:0, type:'topping', indv_price: 0, quantity:0, imageUrl:'http://www.metro-farms.com/wp-content/uploads/2015/05/ButterheadLettuce-00.jpg'},
		{name:'tomato', id:1, type:'topping', indv_price: 0, quantity:0, imageUrl:'http://www.buyfruit.com.au/images/P/CherryTomatoes__54113.jpg'},
		{name:'onion', id:2, type:'topping', indv_price: 0, quantity:0, imageUrl:'http://ichef.bbci.co.uk/news/660/media/images/80896000/jpg/_80896768_red-onion-think624.jpg'},
		{name:'pickles', id:3, type:'topping', indv_price: 0, quantity:0, imageUrl:'http://images.wisegeek.com/sliced-pickles.jpg'},
		{name:'beets', id:4, type:'topping', indv_price: 0, quantity:0, imageUrl:'https://findingtimeforcooking.files.wordpress.com/2013/10/beet-leek-feta-frittata-beets-chopped.jpg'},
		{name:'olives', id:5, type:'topping', indv_price: 0, quantity:0, imageUrl:'http://img2.timeinc.net/health/img/mag/2013/03/cocktail-olives-400x400.jpg'},
		{name:'peppers', id:6, type:'topping', indv_price: 0, quantity:0, imageUrl:'http://www.chatelaine.com/wp-content/uploads/2012/07/be4126574237985f63d42dee79e5-603x660.jpg'},
		{name:'anchovies', id:7, type:'topping', indv_price: 0.99, quantity:0, imageUrl:'http://images1.phoenixnewtimes.com/imager/u/original/6547316/brown_tinned_anchovies.jpg'},

		{name:'tahini', id:8, type:'sauce', indv_price: 0, quantity:0, imageUrl:'http://www.cbc.ca/inthekitchen/assets_c/2012/11/Tahini562-thumb-596x350-247333.jpg'},
		{name:'hummus', id:9, type:'sauce', indv_price: 0, quantity:0, imageUrl:'http://files.foodess.com/image/upload/MTMxNTk1NDc2Nzg4MTAzMTc4.jpg'},
		{name:'mayo', id:10, type:'sauce', indv_price: 0, quantity:0, imageUrl:'http://www.mentalwellnesscounseling.com/wp-content/uploads/2012/04/mayo-money-traverse-city-counselor.jpg'},
		{name:'garlic sauce', id:11, type:'sauce', indv_price: 0, quantity:0, imageUrl:'http://www.jocooks.com/wp-content/uploads/2012/04/roasted-potatoes-with-garlic-sauce-1-2.jpg'},
		{name:'hot sauce', id:12, type:'sauce', indv_price: 0, quantity:0, imageUrl:'http://crossvillenews1st.com/wp-content/uploads/2014/07/franks-red-hot-sauce.jpg'},
		{name:'guacamole', id:13, type:'sauce', indv_price: 0.99, quantity:0, imageUrl:'http://162.61.226.249/PicOriginal/P63482612080919_5.jpg'},
	];

	var addons = [];

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