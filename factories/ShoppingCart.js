angular.module('webMenu')

.factory('ShoppingCart', function(){
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
				var others = 0;
				for(d=0; d<shopcart[i].drinks.length; d++){
					others += (shopcart[i].drinks[d].indv_price * shopcart[i].drinks[d].quantity);
				};
				for(t=0; t<shopcart[i].toppings.length; t++){
					others += (shopcart[i].toppings[t].indv_price * shopcart[i].toppings[t].quantity);
				};
				for(s=0; s<shopcart[i].sides.length; s++){
					others += (shopcart[i].sides[s].indv_price * shopcart[i].sides[s].quantity);
				};
				subtotal += others;
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
