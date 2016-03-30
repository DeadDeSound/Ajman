angular.module('starter.controllers', [])


    .controller('SlideBoxCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {

        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };
        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };

        // Called each time the slide changes
        $scope.slideChanged = function (index) {
            $scope.slideIndex = index;
        };

    });



