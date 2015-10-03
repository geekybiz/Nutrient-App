angular.module('fatApp', ['ui.router', 'ngMaterial'])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

    .state('home', {
      url:'/home',
      templateUrl: 'app/home/homeTmpl.html',
      controller: 'homeCtrl',
      resolve: {
        getAllData: function(homeService){
            return homeService.getAllData().then(function(resp){
              return resp.data.report.foods;
            });
        }
      }
    });

    $urlRouterProvider.otherwise('/home');


});
