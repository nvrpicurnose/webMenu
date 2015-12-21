angular.module('webMenu')

.controller('specialCtrl', ['$scope', 'SideFoods', 'ShoppingCart', 'FoodOrder', function($scope, SideFoods, ShoppingCart, FoodOrder){
	//retreive promotional item selected
	$scope.promo = FoodOrder.getpromo();

	//to go back to the promos page
	$scope.back = function(){
		window.location.assign('#/promo');
		console.log('back');
	};
}]);