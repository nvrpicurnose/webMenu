angular.module('webMenu')

.controller('promoCtrl', ['$scope', 'Promotions', 'FoodOrder', function($scope, Promotions, FoodOrder){
	$scope.promos = Promotions.get();

	$scope.enterPromo = function(promo){
		FoodOrder.setpromo(promo);
		$scope.promo_id = FoodOrder.getpromoid();
		window.location.assign('#/promo/'+ $scope.promo_id);
	};
}]);