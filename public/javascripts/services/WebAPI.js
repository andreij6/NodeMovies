myApp.factory('WebAPI', function($http, $q){
	return {
		getMovies: function(){
			var defer = $q.defer();
			
			$http.get('/api/movies').success(
				function(data){
					defer.resolve(data);
				}
			).error(
				function(status){
					defer.reject(status);
				}
			);
			
			return defer.promise;
		},
		
		getTheaters: function(){
			var defer = $q.defer();
			
			$http.get('api/theaters').success(
				function(data){
					defer.resolve(data);
				},
				function(status){
					defer.reject(status);
				}
			);
			
			return defer.promise;
		}
	};
});
