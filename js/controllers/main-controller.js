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

    $scope.getInclude = function () {
        if (localStorage.getItem("lang") === "en") {
            return "templates/en/sideMenu.html"
        } else {
            return "templates/ar/sideMenu.html"
        }

    };

    $scope.toggleMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

    $scope.closeMenu = function () {
        $ionicSideMenuDelegate.toggleRight();
    };

    $scope.changeLang = function () {
        console.log(localStorage.getItem("lang"));
        if (localStorage.getItem("lang") === "en") {
            localStorage.setItem("lang", "ar");
            console.log(localStorage.getItem("lang"));
            $window.location.reload(true);

        } else {
            localStorage.setItem("lang", "en");
            console.log(localStorage.getItem("lang"));
            $window.location.reload(true);

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


app.controller('splashController', function ($scope, $state, $rootScope, $timeout, $ionicViewService, $ionicHistory) {

    $scope.setAr = function () {
        localStorage.setItem("lang", "ar");
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $ionicViewService.clearHistory();
        console.log("home");
        $state.go('home')
    };

    $scope.setEn = function () {
        localStorage.setItem("lang", "en");
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $ionicViewService.clearHistory();
        console.log("home");
        $state.go('home')
    };

    $scope.StartSplash = function () {
        if (localStorage.getItem("lang") == "NA") {
            $timeout(function () {
                $state.go('splash2')
            }, 8000);
        } else {
            $timeout(function () {
                $ionicHistory.nextViewOptions({
                    historyRoot: true
                });
                $ionicViewService.clearHistory();
                $state.go('home')
            }, 8000);
        }
    }

    $scope.StartSplash();


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

});


app.controller("MediaCenterPageController", /**
 * Home Page Controller
 */
function ($scope, NewsService, $state) {

    $scope.model = {
        'RecentArticles': []

    };

    $scope.model = NewsService;
    NewsService.loadRecentArticles(15);

    $scope.sendData = function (index) {
        // Initialize packed or we get the word 'undefined'
        if (typeof index === 'undefined') {

        } else {
            $state.go();
            console.log(index);
        }
    };

    $scope.goToCategory = function (catID) {
        // Initialize packed or we get the word 'undefined'
        window.location = "category.html?" + catID;
        console.log(catID);
    };
    $scope.goToCategory = function (catID) {
        // Initialize packed or we get the word 'undefined'
        window.location = "category.html?" + catID;
        console.log(catID);
    };

});


app.controller("MediaCenterDetailsPageController", /**
 * Home Page Controller
 */
function ($scope, $stateParams,NewsService) {

    $scope.id = $stateParams.id;

    console.log("id "+$scope.id);

    $scope.model = NewsService;
    NewsService.loadArticle($scope.id);






});



