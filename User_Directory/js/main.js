var myApp = angular.module("myApp",[]);

myApp.factory('myFactory',function($http){
    var factory = {};
   factory.getItems = function () {
    return  $http.get('js/MOCK_DATA.json');  
   };
   return factory;
});
//with factory
myApp.controller("search1Controller",function($scope,myFactory){
    myFactory.getItems().then(function(response){
         $scope.displayData = response.data;
    });
});
// without factory
myApp.controller("searchController",function($scope,$http){
    $http.get("js/MOCK_DATA.json").then(function(response){
        $scope.displayData = response.data;
    });
});

       