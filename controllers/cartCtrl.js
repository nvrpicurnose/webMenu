angular.module('webMenu')

.controller('cartCtrl', ['$scope', 'ShoppingCart', function($scope, ShoppingCart){
	$scope.cartcontent = function(){
		return ShoppingCart.cartcontent();
	};

	$scope.subtotal = function(){
		return ShoppingCart.subtotal();
	};
	$scope.tax = function(){
		return ShoppingCart.tax();
	};
	$scope.total = function(){
		return ShoppingCart.total();
	};
	$scope.remove = function(food){
		ShoppingCart.remove(food);
	};

}]);