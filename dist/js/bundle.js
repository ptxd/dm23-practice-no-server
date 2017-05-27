'use strict';

angular.module('fin', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../html/home.html'
    }).state('dashboard', {
        url: '/dashboard/',
        templateUrl: '../html/dashboard.html'
    });
});
//# sourceMappingURL=bundle.js.map
