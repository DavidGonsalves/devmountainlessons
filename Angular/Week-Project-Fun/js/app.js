angular.module('fun', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
       
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "views/home.html",
            })

            .state('spring',{
                url:'/spring',
                templateUrl:"views/spring.html",
                controller: "mainCtrl"
            })

            .state('summer',{
                url:'/summer',
                templateUrl:"views/summer.html",
                controller: "mainCtrl"
            })
            
            .state('fall', {
                url:'/fall',
                templateUrl:"views/fall.html",
                controller: "mainCtrl"
            })

            .state('winter', {
                url:'/winter',
                templateUrl:"views/winter.html",
                controller: "mainCtrl"
            })

        //     .state('locations', {
        //         url: '/locations',
        //         templateUrl:"views/locations.html",
        //         controller: "locationsCtrl"
        //     });

        $urlRouterProvider
            .otherwise('/');
    });
