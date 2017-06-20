var app = angular.module('movieApp', ["ngRoute"])

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/", {
            templateUrl: "/views/home.html",
            controller: "homeController"
        })
        .when('/home', {
            templateUrl: "/views/home.html",
            controller: "homeController"
        })
        .when('/add', {
            templateUrl: "/views/add.html",
            controller: "addController"
        })
        .otherwise({ redirectTo: '/' })
})