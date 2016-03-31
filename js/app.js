// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('app', [
    'ionic',
    'app.controllers',
    'app.services',
    'app.filters',
    'app.states',
    'ngCordova'
]);

app.constant("CONFIG", "ar");

app.run(function ($rootScope) {
    if (localStorage.getItem("lang") !== "ar" && localStorage.getItem("lang") !== "en") {
        localStorage.setItem("lang", "NA");
    }
    $rootScope.SlidePage = false;
    $rootScope.iosCSS = "";


});


app.run(function ($ionicPlatform, $cordovaStatusbar, $rootScope, $window, $ionicPopup, $cordovaDevice) {
    console.log("IOS CSS 1 : " + $rootScope.iosCSS);
    if (!ionic.Platform.is('android')) {
        //$window.location.reload(true);
        $rootScope.iosCSS = "Iphon";
        console.log("IOS CSS 2 " + $rootScope.iosCSS);
    }
    $ionicPlatform.ready(function () {


        localStorage.setItem("Device_ID", $cordovaDevice.getUUID());


        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


            if (cordova.plugin.keyboard.isOpening) {
                document.getElementById("homeFooterContainer").style.visibility = "hidden";
            }

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
            $cordovaStatusbar.overlaysWebView(true);

            // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
            $cordovaStatusbar.style(1);

            // supported names: black, darkGray, lightGray, white, gray, red, green,
            // blue, cyan, yellow, magenta, orange, purple, brown
            //$cordovaStatusbar.styleColor('red');
            //
            $cordovaStatusbar.styleHex('#896D32');
            //
            //$cordovaStatusbar.hide();

            $cordovaStatusbar.show();

            var isVisible = $cordovaStatusbar.isVisible();
        }
    });
});
