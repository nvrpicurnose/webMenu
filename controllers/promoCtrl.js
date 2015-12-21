angular.module('webMenu')

.controller('promoCtrl', ['$scope', 'Promotions', 'Coupons', 'FoodOrder', function($scope, Promotions, Coupons, FoodOrder){
	$scope.promos = Promotions.get();
	$scope.coupons = Coupons.get();

	$scope.enterPromo = function(promo){
		FoodOrder.setpromo(promo);
		$scope.promo_id = FoodOrder.getpromoid();
		window.location.assign('#/promo/'+ $scope.promo_id);
	};
}]);