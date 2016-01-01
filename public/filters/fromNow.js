angular.module('MyApp').
	filter('fromNow', function() {
		return function(data) {
			return moment(data).fromNow();
		}
	});