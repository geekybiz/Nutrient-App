angular.module('fatApp')
  .service('homeService', function($http) {

    this.getAllData = function() {
      return $http({
        method: 'GET',
        url: 'http://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269'
      });
    };

    this.sendToDB = function(food) {
      return $http({
        method: 'POST',
        url: 'http://localhost:8080/api/food',
        data: food
      }).then(function(resp) {
        console.log(resp);
      });
    };
  });
