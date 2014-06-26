myApp.controller('HomeCtrl', function($scope, WebAPI, Data){
	
	$scope.MovieData 	= function(){
		WebAPI.getMovies().then(
			function(data){
				Data.Movies 	= data;
			},
			function(statusCode){
				console.log(statusCode);
			}
		);
	};
	
	$scope.TheaterData 	= function(){
		WebAPI.getTheaters().then(
			function(data){
				Data.Theaters = data;
			},
			function(statusCode){
				console.log(statusCode);
			}
		);
	};
	
	$scope.seedData 	= function(){
		if(Data.Movies.length === 0)
		{
			$scope.MovieData();
		} else {
			$scope.Movies = Data.Movies;
		}
		
		if(Data.Theaters.length === 0)
		{
			$scope.TheaterData();
		} else {
			$scope.Theaters = Data.Theaters;
		}
	};
	
	$scope.seedData();
});
