'use strict';

angular.module('fin', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../html/home.html'
    }).state('dashboard', {
        url: '/dashboard/',
        templateUrl: '../html/dashboard.html'
    }).state('technical', {
        url: '/technical',
        templateUrl: '../html/charts.html'
    }).state('tables', {
        url: '/tables',
        templateUrl: '../html/tables.html'
    }).state('forms', {
        url: '/forms',
        templateUrl: '../html/forms.html'
    });
});
'use strict';

angular.module('fin').directive('navDirective', function () {
    return {
        templateUrl: '../html/nav.html',
        restrict: 'E'
    };
});
//# sourceMappingURL=bundle.js.map
