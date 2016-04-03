





var app = angular.module('myApp', ['ngRoute'])
//ngRoute is a seperate module that is included inside our own module
app.config(function($routeProvider){
//all the front end routes live inside the config file for our module
    $routeProvider
        .when('/', { //this is the initial home route for the site
            templateUrl : '/html/home.html',
            controller  : 'mainController' //each page can have a different controller if needed
        })
        .when('/other', {
            templateUrl : '/html/other.html',
            controller  : 'mainController'
        })
})