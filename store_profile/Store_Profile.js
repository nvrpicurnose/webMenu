angular.module('webMenu')

.service('StoreProfile', function(){
	var store = {
		id: 0,
		name: 'Auntys Kitchen',
		location: '345 University Ave, Waterloo ON',
		postal_code: 'L3D R9J',
		province: 'ON',
		hours_of_op: [
				{day:'Monday', start:10, end:21},
				{day:'Tuesday', start:10, end:21},
				{day:'Wednesday', start:10, end:21},
				{day:'Thursday', start:10, end:21},
				{day:'Friday', start:10, end:21},
				{day:'Saturday', start:10, end:21},
				{day:'Sunday', start:10, end:21}],
		telephone: '519-531-5468',
		email: 'auntyskitchen@gmail.com',
		support_email: 'support@email.com',
		halal_options: true,
		veggie_options: true,
		delivery: true,
		open: true
	};

	return {
		get: function(){
			return store;
		}
	}
});



