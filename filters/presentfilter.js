angular.module('webMenu')

.filter('presentfilter', function(){
	return function(items){
		var filtered = [];
		for(var i =0; i<items.length;i++){
			var item = items[i];
			if(item.quantity != 0){
				filtered.push(item);
			}
		}
		return filtered;
	};
});