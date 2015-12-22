angular.module('webMenu')

.controller('cartCtrl', ['$scope', 'ShoppingCart', function($scope, ShoppingCart){

	$scope.cartcontent = function(){
		return ShoppingCart.cartcontent();
	};
	$scope.cart = $scope.cartcontent();

	$scope.promocartcontent = function(){
		return ShoppingCart.promocartcontent();
	}
	$scope.promocart = $scope.promocartcontent();

	$scope.subtotal = function(){
		return ShoppingCart.subtotal();
	};
	$scope.tax = function(){
		return ShoppingCart.tax();
	};
	$scope.total = function(){
		return ShoppingCart.total();
	};
	$scope.removeFood = function(food){
		ShoppingCart.removefood(food);
	};
	$scope.removePromo = function(promo){
		ShoppingCart.removepromo(promo);
	};

	($scope.calculate_promocart = function(){
		$scope.promosubtotal = 0;
			for(e=0; e<$scope.promocart.length; e++){
				$scope.promosubtotal += Number($scope.promocart[e].price);
				for(f=0;f<$scope.promocart[e].addons; f++){
					$scope.promosubtotal += Number($scope.promocart[e].addons[f].indv_price);
				};
			};
		ShoppingCart.promocart_subtotal($scope.promosubtotal);
	})();

}]);