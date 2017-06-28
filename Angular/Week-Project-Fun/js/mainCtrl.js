angular.module('fun').controller('mainCtrl', function($scope, service1){


$scope.weatherInfo = service1.weatherInfo;

$scope.name = 'Hello'

});