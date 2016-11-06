angular.module('grindFitness', ['ngRoute', 'ngAnimate'])

angular.module('grindFitness').config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  // Takes '#' out of url
  $locationProvider.html5Mode(true);
  // Specifying what controllers and views to use on what route
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise('/')
}])

angular.module('grindFitness').controller('HomeCtrl', ["$scope", function($scope) {
  console.log("Welcome to The Grind Fitness!");
}]);
