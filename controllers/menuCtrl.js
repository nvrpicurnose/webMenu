angular.module('webMenu')

.controller('menuCtrl', ['$scope', 'Foods', 'FoodOrder',  function($scope, Foods, FoodOrder){
	$scope.foods = Foods.get();

	$scope.enterFood = function(food){
		FoodOrder.setfood(food);
		$scope.food_id = FoodOrder.getid();
		window.location.assign('#/menu/'+ $scope.food_id);
	};
}]);
