angular.module('webMenu')

.service('ShoppingCart', function(){
	var shopcart = [];
	var promocart = [];
	var promosubtotal = 0;
	var subTotal = 0;
	var tax = 0;
	var total = 0;

	return {
		add: function(food){
			shopcart.push(food);
		},
		addpromo: function(promo_bundle){
			promocart.push(promo_bundle);
		},
		promocart_subtotal: function(promosubtot){
			promosubtotal = promosubtot;
		},
		removefood: function(food){
			shopcart.splice(food.$index,1);
		},
		removepromo: function(promo){
			shopcart.splice(promo.$index,1);
		},
		cartcontent: function(){
			return shopcart;
		},
		promocartcontent: function(){
			return promocart;
		},
		subtotal: function(){
			var subtotal = 0;
			for(i=0; i<shopcart.length; i++){
				subtotal += Number(shopcart[i].price);
				var others = 0;
				for(d=0; d<shopcart[i].drinks.length; d++){
					others += Number(shopcart[i].drinks[d].indv_price * shopcart[i].drinks[d].quantity);
				};
				for(t=0; t<shopcart[i].toppings.length; t++){
					others += Number(shopcart[i].toppings[t].indv_price * shopcart[i].toppings[t].quantity);
				};
				for(s=0; s<shopcart[i].sides.length; s++){
					others += Number(shopcart[i].sides[s].indv_price * shopcart[i].sides[s].quantity);
				};
				for(a=0; a<shopcart[i].addons.length; a++){
					others += Number(shopcart[i].addons[a].indv_price);
				};
				subtotal += others;
			}
			subtotal += promosubtotal;
			subTotal = subtotal;
			return subTotal;
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
