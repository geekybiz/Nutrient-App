angular.module('fatApp')
.controller('homeCtrl', function($scope, homeService, getAllData) {
  $scope.test = homeService.test;

  $scope.foods = (getAllData);
  console.log(getAllData);

  $scope.sendToDB = function(food){
    homeService.sendToDB(food);
  };
});
