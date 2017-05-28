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
'use strict';

angular.module('fin').run(['$anchorScroll', function ($anchorScroll) {
            $anchorScroll.yOffset = 60; // always scroll by 50 extra pixels
}]).controller('anchor', function ($scope, $location, $anchorScroll) {
            $scope.how = function () {
                        // set the location.hash to the id of
                        // the element you wish to scroll to.
                        $location.hash('how');
                        // call $anchorScroll()
                        $anchorScroll();
            };

            $scope.discover = function () {
                        // set the location.hash to the id of
                        // the element you wish to scroll to.
                        $location.hash('discover');
                        // call $anchorScroll()
                        $anchorScroll();
            };

            $scope.contact = function () {
                        // set the location.hash to the id of
                        // the element you wish to scroll to.
                        $location.hash('contact');
                        // call $anchorScroll()
                        $anchorScroll();
            };

            $scope.home = function () {
                        // set the location.hash to the id of
                        // the element you wish to scroll to.
                        $location.hash('home');
                        // call $anchorScroll()
                        $anchorScroll();
            };
});
//# sourceMappingURL=bundle.js.map
