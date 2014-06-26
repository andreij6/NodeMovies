var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(
	function($routeProvider){
	$routeProvider
		.when('/', 
			{
				templateUrl: 'templates/Home.html',
				controller:  'HomeCtrl'
			}
	)	.when('/Movies',
			{
				templateUrl: 'templates/Movie.html',
				controller:  'MovieCtrl'
			}
	)	.when('/Theaters',
			{
				templateUrl: 'templates/Theater.html',
				controller:  'TheaterCtrl'
			}
	)	.otherwise( 
		{ 
			redirectTo: '/'
		}
	);
});
