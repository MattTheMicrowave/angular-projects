//var HelloCtrlController = function($scope) {
//
//$scope.name = "";
//
//}           
               


var WorldControlController = function($scope) {

$scope.population = 7000;
$scope.worldsPercentage = function(countryPopulation) {

return (countryPopulation / $scope.population) * 100;

};    
 
$scope.countries = [  
      {name: 'France', population: 63.1},
       {name: 'United Kingdom', population: 61.8},
    {name: 'USA', population: 300}
   
   ];   

};



//angular.module('WorldControlApp', [])
//    .controller('WorldControlController', function($scope) {
//    
//    $scope.population = 7000;
//    $scope.countries = [
//    
//        {name: 'France', population: 63.1},
//        {name: 'United Kingdom', population: 61.8}
//    
//    
//    ];
//    
//});
//
