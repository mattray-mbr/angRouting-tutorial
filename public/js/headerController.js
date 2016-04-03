app.controller('headerController', ['$scope', '$http', function($scope, $http){
    
    $scope.testing = function(){
        $scope.result = "hello, from the header controller"
    }
}])