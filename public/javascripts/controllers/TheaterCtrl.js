myApp.controller('TheaterCtrl', function($scope, Data, WebAPI){
	$scope.MovieData 	= function(){
		WebAPI.getMovies().then(
			function(data){
				Data.Movies 	= data;
				$scope.Movies = Data.Movies;
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
				$scope.Theaters = Data.Theaters;
			},
			function(statusCode){
				console.log(statusCode);
			}
		);
	};
	
	$scope.seedData 	= function(){
		
		if(Data.Movies.length == 0)
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
