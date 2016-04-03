app.controller('mainController', ['$scope', '$http', function($scope, $http){
    
    $scope.button = function(){
        $scope.test = "hello from the main controller"
    }

}])