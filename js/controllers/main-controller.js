/**
 * Created by fantom on 2/18/16.
 */


var app = angular.module('mainController', []);

app.controller('mainController', function ($scope,
                                           $rootScope,
                                           $stateParams,
                                           $ionicSideMenuDelegate,
                                           $state,
                                           $ionicHistory,
                                           $ionicViewService,
                                           $cordovaStatusbar,
                                           $cordovaSocialSharing,
                                           $ionicPopup,
                                           $ionicSlideBoxDelegate,
                                           $window) {

    $stateParams.locale = $rootScope.appLang;
    $scope.title = 'Ajamn';
    $scope.expandme = false;
    console.log("'app.controllers'");
    $scope.subBarShow = false;
    var rotationSnap = 45;
    //Draggable.create("#homeFooter", {type: "y", bounds: "#homeFooterContainer", throwProps: true});
    Draggable.create("#C-container", {
        type: "rotation",
        throwProps: true
    });

    $scope.toggleMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

    $scope.closeMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

    $scope.changeLang = function () {
        console.log($rootScope.appLang);
        if ($rootScope.appLang === "en") {
            $rootScope.appLang = "ar";
            $state.reload();
        } else {
            $rootScope.appLang = "en";
            $state.reload();
        }
    };

    $scope.homePage = function () {
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $ionicViewService.clearHistory();
        console.log("home");
        $state.go('home')
    };
    $scope.shareSocial = function () {
        $cordovaSocialSharing.share("Ajman", "Ajaman DED", "http://www.ajmanded.ae");
    };

    $scope.callAlert = function () {


//        document.location.href = 'tel:80055';


        //       A confirm dialog
        var confirmPopup = $ionicPopup.confirm({
            title: '',
            template: '80055',
            cssClass: 'custom-popup'
            //buttons: [
            //    {
            //        text: 'cancel'
            //
            //    },
            //    {
            //        text: 'OK',
            //        type: 'button-positive',
            //        onTap: function (e) {
            //          document.location.href = 'tel:80055';
            //        }
            //    }
            //]
        });

        confirmPopup.then(function (res) {
            if (res) {
                document.location.href = 'tel:80055';
                console.log('Yes');
            } else {
                console.log('No');
            }
        });
    };


    $scope.callAlert2 = function () {


//        document.location.href = 'tel:80055';


        //       A confirm dialog
        var confirmPopup = $ionicPopup.confirm({
            title: '',
            templateUrl: 'templates/ar/Messages2.html',
            cssClass: 'custom-popup',
            //buttons: [
            //    {
            //        text: 'cancel'
            //
            //    },
            //    {
            //        text: 'OK',
            //        type: 'button-positive',
            //        onTap: function (e) {
            //          document.location.href = 'tel:80055';
            //        }
            //    }
            //]
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('Yes');
            } else {
                console.log('No');
            }
        });
    };


    $scope.nextSlide = function () {
        $ionicSlideBoxDelegate.enableSlide(true);
        $ionicSlideBoxDelegate.next();

    }


    //$cordovaStatusbar.overlaysWebView(true);
    //
    //// styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
    //$cordovaStatusbar.style(1);
    //
    //// supported names: black, darkGray, lightGray, white, gray, red, green,
    //// blue, cyan, yellow, magenta, orange, purple, brown
    //$cordovaStatusbar.styleColor('red');
    ////
    //$cordovaStatusbar.styleHex('#ff0000');
    ////
    ////$cordovaStatusbar.hide();
    //
    //$cordovaStatusbar.show();

    //var isVisible = $cordovaStatusbar.isVisible();

});


app.controller('SlideBoxCtrl', function ($scope, $state, $ionicSlideBoxDelegate) {

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

    })


