module app {
    class Config {
        constructor($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "/app/posts/list.html",
                    controller: "PostsCtrl as vm"
                })
                .when("/edit/:id", {
                    templateUrl: "/app/posts/edit.html",
                    controller: "PostEditCtrl as vm"
                })
                .when("/add", {
                    templateUrl: "/app/posts/add.html",
                    controller: "PostAddCtrl as vm"
                })
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ['$routeProvider'];

    var mainApp = angular.module('PANDemoApp', ['ngRoute']);
    mainApp.config(Config);
    /* Had a lot of issues involving angular's change of hashset when redirecting to different pages. You'll notice I added a ! in href's on the client side to handle this.
    The code below is something I tried, but I felt I caused to an issue with loading data so I removed it and found the real issue in the promise I was returning the DataService.ts file
    class Config {
        constructor($routeProvider: ng.route.IRouteProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "/app/posts/list.html",
                    controller: "PostsCtrl as vm"
                })
                .when("/edit/:id", {
                    templateUrl: "/app/posts/edit.html",
                    controller: "PostEditCtrl as vm"
                })
                .when("/add", {
                    templateUrl: "/app/posts/add.html",
                    controller: "PostAddCtrl as vm"
                })
                .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
        }
    }
    Config.$inject = ['$routeProvider', '$locationProvider];

    var mainApp = angular.module('PANDemoApp', ['ngRoute']);
    mainApp.config(Config);
    */
}