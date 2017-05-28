angular.module('fin').run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 60;   // always scroll by 50 extra pixels
}])
    .controller('anchor', function($scope, $location, $anchorScroll) {
            $scope.how = function() {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('how');
            // call $anchorScroll()
            $anchorScroll();
            };

            $scope.discover = function() {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('discover');
            // call $anchorScroll()
            $anchorScroll();
            };

            $scope.contact = function() {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('contact');
            // call $anchorScroll()
            $anchorScroll();
            };

             $scope.home = function() {
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('home');
            // call $anchorScroll()
            $anchorScroll();
            };

  });