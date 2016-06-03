/**
 * Created by fantom on 2/18/16.
 */


var app = angular.module('mainController', []);

app.controller('homeCtrl', function ($scope, $state) {

    var currentPlatformVersion = ionic.Platform.version();
    //var mainVersion = currentPlatformVersion.split('.')[0];
    console.log("Version" + currentPlatformVersion);
    if (ionic.Platform.isAndroid()) {
        if (currentPlatformVersion >= 6 || currentPlatformVersion === 4.4) {
            var elem = document.getElementById("C-container");
            var kcRotateDial = function (elem) {
                var output = {};
                //Preventing elem to being selected on IE
                if (document.all && !window.opera) elem.setAttribute("unselectable", "on");
                //Public Properties
                output.rad = 0;
                output.deg = 0;
                output.per = 0;
                output.fullRad = 0;
                output.fullDeg = 0;
                output.fullPer = 0;
                output.spin = 0;
                output.clock = false;
                //Private properties
                var drag = false;
                var pos = [];
                var size = [];
                var axis = [];
                var cursor = [];
                var rad = 0;
                var lastRad = 0;
                var lastPer = 0;
                var lastFullRad = 0;
                var maxRad = 6.283185307179586;
                var maxDeg = 360;
                var maxPer = 100;
                var Dx = [];
                var Dy = [];
                var dummy;
                //Public Methods
                output.onchange = function () {
                };
                //Private Methods
                function preventDefault(e) {
                    //prevent event's default action
                    if (window.event) e = window.event;
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        e.returnValue = false
                    }
                }

                function getPos(elem) {
                    //get the position [left,top] relative to whole document
                    var tmp = elem;
                    var left = tmp.offsetLeft;
                    var top = tmp.offsetTop;
                    while (tmp = tmp.offsetParent) left += tmp.offsetLeft;
                    tmp = elem;
                    while (tmp = tmp.offsetParent) top += tmp.offsetTop;
                    return [left, top];
                }

                function getSize(elem) {
                    //return the size [width,height] of the element
                    return [elem.offsetWidth, elem.offsetHeight];
                }

                function getAxis(elem) {
                    //return the center point [left,top] of the element
                    return [getPos(elem)[0] + getSize(elem)[0] / 2, getPos(elem)[1] + getSize(elem)[1] / 2];
                }

                function getCursorPos(e) {
                    //return the cursor's position [x,y]
                    var cursorPos;
                    if (window.event) e = window.event;
                    if (e.clientX) cursorPos = [e.clientX, e.clientY];
                    if (e.pageX) cursorPos = [e.pageX, e.pageY];
                    try {
                        if (e.targetTouches[0]) cursorPos = [e.targetTouches[0].pageX, e.targetTouches[0].pageY];
                    } catch (err) {
                    }
                    return cursorPos;
                }

                function getAngle(e) {
                    //getting rotation angle by Arc Tangent 2
                    var rad;
                    pos = getPos(elem);
                    size = getSize(elem);
                    axis = getAxis(elem);
                    cursor = getCursorPos(e);
                    try {
                        rad = Math.atan2(cursor[1] - axis[1], cursor[0] - axis[0])
                    } catch (err) {
                    }
                    //correct the 90� of difference starting from the Y axis of the element
                    rad += maxRad / 4;
                    //transform opposite angle negative value, to possitive
                    if (rad < 0) rad += maxRad;
                    return rad;
                }

                function setDrag(e, bool) {
                    //set or unset the drag flag
                    if (bool) {
                        preventDefault(e);
                        rad = getAngle(e);
                        drag = true;
                    } else {
                        drag = false;
                    }
                }

                function rotate(e) {
                    //Rotate the element
                    if (drag) {
                        //setting control variables
                        var cursorRad;
                        var relativeRad;
                        cursorRad = getAngle(e);
                        relativeRad = cursorRad - rad;
                        var rotationRad = lastRad + relativeRad;
                        if (isNaN(rotationRad)) rotationRad = lastRad;
                        if (rotationRad < 0) rotationRad = maxRad;
                        if (rotationRad > maxRad) rotationRad = 0;

                        rad = cursorRad;

                        //applying rotation to element
                        elem.style.transform = "rotate(" + rotationRad + "rad)";
                        elem.style.MozTransform = "rotate(" + rotationRad + "rad)";
                        elem.style.WebkitTransform = "rotate(" + rotationRad + "rad)";
                        elem.style.OTransform = "rotate(" + rotationRad + "rad)";
                        elem.style.MsTransform = "rotate(" + rotationRad + "rad)";

                        //rotation Matrix for IExplorer
                        var iecos = Math.cos(cursorRad);
                        var iesin = Math.sin(cursorRad);
                        Dx[0] = -(size[0] / 2) * iecos + (size[1] / 2) * iesin + (size[0] / 2);
                        Dx[1] = -(size[0] / 2) * iesin - (size[1] / 2) * iecos + (size[1] / 2);
                        elem.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + iecos + ", M12=" + -iesin + ", M21=" + iesin + ", M22=" + iecos + ", Dx=" + Dx[0] + ", Dy=" + Dx[1] + ", SizingMethod=auto expand)";
                        elem.style.msFilter = "progid:DXImageTransform.Microsoft.Matrix(M11=" + iecos + ", M12=" + -iesin + ", M21=" + iesin + ", M22=" + iecos + ", Dx=" + Dx[0] + ", Dy=" + Dx[1] + ", SizingMethod=auto expand)";

                        //assigning values to public properties
                        output.rad = rotationRad;
                        output.deg = maxDeg * output.rad / (2 * Math.PI);
                        output.per = (output.rad * maxPer) / maxRad;

                        if ((lastPer <= 100 && lastPer >= 60) && (output.per >= 0 && output.per <= 30)) output.spin++;
                        if ((lastPer <= 30 && lastPer >= 0) && (output.per >= 60 && output.per <= 100)) output.spin--;

                        output.fullRad = output.rad + (maxRad * output.spin);
                        output.fullDeg = output.deg + (maxDeg * output.spin);
                        output.fullPer = output.per + (maxPer * output.spin);

                        if (lastFullRad < output.fullRad) output.clock = true;
                        if (lastFullRad > output.fullRad) output.clock = false;

                        lastRad = rotationRad;
                        lastPer = output.per;
                        lastFullRad = output.fullRad;
                        output.onchange();
                    }
                }

                //Listen events
                if (elem.attachEvent) {
                    elem.attachEvent('onmousedown', function () {
                        setDrag(0, true)
                    });
                    document.attachEvent('onmouseup', function () {
                        setDrag(0, false)
                    });
                    document.attachEvent('onmousemove', function () {
                        rotate(0)
                    });
                } else if (elem.addEventListener) {
                    elem.addEventListener('mousedown', function (e) {
                        setDrag(e, true)
                    });
                    document.addEventListener('mouseup', function (e) {
                        setDrag(e, false)
                    });
                    document.addEventListener('mousemove', function (e) {
                        rotate(e)
                    });
                    try {
                        elem.addEventListener('touchstart', function (e) {
                            setDrag(e, true);
                        })
                    } catch (err) {
                    }
                    try {
                        document.addEventListener('touchend', function (e) {
                            setDrag(e, false);
                        })
                    } catch (err) {
                    }
                    try {
                        document.addEventListener('touchmove', function (e) {
                            rotate(e)
                        })
                    } catch (err) {
                    }
                }
                //Fixing black box issue on IE9
                dummy = document.createElement("div");
                dummy.innerHTML = '<!--[if gte IE 9]><br /><![endif]-->';
                if (dummy.getElementsByTagName("br").length == 1) elem.style.filter = "none";
                delete dummy;
                //Output
                return output;
            };
            var dial = kcRotateDial(elem);
        } else {
            Draggable.create("#C-container", {
                type: "rotation",
                throwProps: true
            });
        }
    } else {
        Draggable.create("#C-container", {
            type: "rotation",
            throwProps: true
        });
    }


    $scope.recognizedText = '';
    $scope.record = function () {
        console.log("hello record");
        var recognition = new SpeechRecognition();
        recognition.onresult = function (event) {
            if (event.results.length > 0) {
                $scope.recognizedText = event.results[0][0].transcript;
                $scope.$apply();


                if ($scope.recognizedText == "online service" || $scope.recognizedText == "online services" ) {
                    $state.go('OnlineServices');
                }else if($scope.recognizedText == "contact" || $scope.recognizedText == "contact us"  || $scope.recognizedText == "contactos"  ){
                    $state.go('contact');

                }else if($scope.recognizedText == "about" || $scope.recognizedText == "about us"  || $scope.recognizedText == "about it" ){
                    $state.go('about');

                }else if($scope.recognizedText == "activities guide" || $scope.recognizedText == "activitie guide" || $scope.recognizedText == "activities"   ){
                    $state.go('activitiesGuide');

                }else if($scope.recognizedText == "services guide" || $scope.recognizedText == "service guide"  ){
                    $state.go('servicesGuide');

                }
            }
        };
        recognition.start();
    };

});

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
                                           $window, NewsService, $ionicPlatform, $cordovaDevice) {





    $stateParams.locale = localStorage.getItem("lang");
    $scope.title = 'Ajamn';
    $scope.expandme = false;
    console.log("'app.controllers'");
    $scope.subBarShow = false;
    var rotationSnap = 45;
    //Draggable.create("#homeFooter", {type: "y", bounds: "#homeFooterContainer", throwProps: true});
    //Draggable.create("#C-container", {
    //    type: "rotation",
    //    throwProps: true,
    //
    //
    //    onClick:function() {
    //console.log("x");
    //         $scope.callAlert();
    //}
    //});
    //
    //$ionicPlatform.ready(function () {
    //
    //    var uuid = $cordovaDevice.getUUID();
    //
    //    $scope.callAlertWithVariable(uuid);
    //
    //});


    $scope.CloseSlide = function () {

        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $ionicViewService.clearHistory();
        console.log("home");
        $state.go('home')
    };


    $scope.nextSlide2 = function () {
        $ionicSlideBoxDelegate.next();
        console.log("Next");
    };


    $scope.GoToNotification = function () {

        if (NewsService.EnableNotification) {

            $state.go('notification');
        }
    };


    $scope.model = NewsService;
    NewsService.LoadNotification(localStorage.getItem("Device_ID"));


    $scope.getInclude = function () {
        if (localStorage.getItem("lang") === "en") {
            return "templates/en/sideMenu.html"
        } else {
            return "templates/ar/sideMenu.html"
        }

    };

    $scope.GetAnnualReport = function () {

        if (ionic.Platform.isAndroid()) {

            if (localStorage.getItem("lang") === "en") {

                return "templates/en/annual_report_android_en.html"
            } else {
                return "templates/ar/annual_report_android_ar.html"
            }

        } else {

            if (localStorage.getItem("lang") === "en") {

                return "templates/en/annual_report_ios_en.html"
            } else {
                return "templates/ar/annual_report_ios_ar.html"
            }
        }


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


    if (ionic.Platform.isAndroid()) {
        var appLink = "https://play.google.com/store/apps/details?id=com.ajman.ded.ae&hl=en";
    } else {
        var appLink = "https://itunes.apple.com/eg/app/ajman-ded/id1098206759?mt=8";

    }


    var appTitle = "Ajman DED";
//    var appLink = "https://play.google.com/store/apps/details?id=com.ajman.ded.ae&hl=en";

    $scope.shareSocial = function () {
        console.log("App Link", appLink);
        $cordovaSocialSharing.share(appTitle, null, null, appLink);
    };


    //$scope.callAlertWithVariable = function (x) {
    //    //document.location.href = 'tel:80055';
    //    //A confirm dialog
    //    var confirmPopup = $ionicPopup.confirm({
    //        title: x,
    //        template: x,
    //        cssClass: 'custom-popup'
    //        //buttons: [
    //        //    {
    //        //        text: 'cancel'
    //        //    },
    //        //    {
    //        //        text: 'OK',
    //        //        type: 'button-positive',
    //        //        onTap: function (e) {
    //        //          document.location.href = 'tel:80055';
    //        //        }
    //        //    }
    //        //]
    //    });
    //
    //    confirmPopup.then(function (res) {
    //        if (res) {
    //            document.location.href = 'tel:80055';
    //            console.log('Yes');
    //        } else {
    //            console.log('No');
    //        }
    //    });
    //};

    function UnicodeAlert() {
        var str;
        str = document.getElementById('inputElement').value;
        alert(str.replace(/&#(\d+);/g));
        return false;
    }


    $scope.callAlert = function () {
        //document.location.href = 'tel:80055';
        //A confirm dialog


        if (localStorage.getItem("lang") === "en") {

            var Title = "Call Customer Service";
            var BtnOK = "Ok";
            var BtnCancel = "Cancel";
        } else {
            var Title = "الإتصال بخدمة العملاء";
            var BtnOK = "موافق";
            var BtnCancel = "إلغاء";

        }


        var confirmPopup = $ionicPopup.confirm({


            title: Title,
            templateUrl: 'templates/CallTemplateMain.html',
            cssClass: 'custom-popup',
            buttons: [
                {
                    text: BtnCancel
                },
                {
                    text: BtnOK,
                    type: 'button-positive',
                    onTap: function (e) {
                        document.location.href = 'tel:80055';
                        console.log("Inside CAll Status")
                    }


                }
            ]
        });

        confirmPopup.then(function (res) {
            if (res == BtnOK) {
                // document.location.href = 'tel:80055';
                document.location.href = 'tel:80055';
                console.log(' CAll Status : Yes');
            } else {
                console.log('Call Status :  No');
            }
        });
    };
    $scope.callAlert2 = function () {


        //        document.location.href = 'tel:80055';


        if (localStorage.getItem("lang") === "en") {

            var Title = "How was your experience?"
            var BtnOK = "Ok";
            var BtnCancel = "Cancel";
        } else {
            var Title = "كيف كانت تجربتك؟";
            var BtnOK = "موافق";
            var BtnCancel = "إلغاء";
        }

        //       A confirm dialog
        var confirmPopup = $ionicPopup.confirm({
            title: Title,
            templateUrl: 'templates/MessageMain.html',
            cssClass: 'custom-popup',
            buttons: [
                {
                    text: BtnCancel

                },
                {
                    text: BtnOK,
                    type: 'button-positive'
                }
            ]
        });

        confirmPopup.then(function (res) {
            if (res) {
                console.log('Yes');
            } else {
                console.log('No');
            }
        });
    };


    $scope.callAlert3 = function () {
        //document.location.href = 'tel:80055';
        //A confirm dialog

        var name = localStorage.getItem("Device_Model");
        var naem2 = $rootScope.iosCSS2;
        var confirmPopup = $ionicPopup.confirm({
            title: name,
            template: naem2,
            cssClass: 'custom-popup'
            //buttons: [
            //    {
            //        text: 'cancel'
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


    $scope.Answer1 = function (id) {
        document.getElementById("happy1").className = "Happeness-face1";
        document.getElementById("happy2").className = "Happeness-face2-Light";
        document.getElementById("happy3").className = "Happeness-face3-Light";
        NewsService.LoadVote_SendAnswer(localStorage.getItem("Device_ID"), 1, id);
        console.log("Answer 1 ");
        console.log(document.getElementById("happy1").className);

    };
    $scope.Answer2 = function (id) {
        document.getElementById("happy2").className = "Happeness-face2";
        document.getElementById("happy1").className = "Happeness-face1-Light";
        document.getElementById("happy3").className = "Happeness-face3-Light";
        NewsService.LoadVote_SendAnswer(localStorage.getItem("Device_ID"), 1, id);
        console.log("Answer 2 ");
        console.log(document.getElementById("happy2").className);

    };
    $scope.Answer3 = function (id) {
        document.getElementById("happy3").className = "Happeness-face3";
        document.getElementById("happy1").className = "Happeness-face1-Light";
        document.getElementById("happy2").className = "Happeness-face2-Light";
        NewsService.LoadVote_SendAnswer(localStorage.getItem("Device_ID"), 1, id);
        console.log("Answer 3 ");
        console.log(document.getElementById("happy3").className);

    };


    $scope.nextSlide = function () {
        $ionicSlideBoxDelegate.enableSlide(true);
        $ionicSlideBoxDelegate.next();

    };


});


app.controller('splashController', function ($scope, $state, $rootScope, $timeout, $ionicViewService, $ionicHistory, $window) {

    $scope.StartSplash = function () {
        if (localStorage.getItem("lang") === "NA") {
            console.log("if NA");
            $state.go('splash2')
        } else {
            $ionicHistory.nextViewOptions({
                historyRoot: true
            });
            $ionicViewService.clearHistory();
            console.log("if exist");
            $state.go('home')
        }
    };

    $timeout(function () {
        console.log("if start Splash")
        $scope.StartSplash();
    }, 8000);

});

app.controller('splash2Controller', function ($scope, $state, $rootScope, $timeout, $ionicViewService, $ionicHistory, $window) {

    $scope.setAr = function () {
        localStorage.setItem("lang", "ar");
        console.log("set Ar");
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $ionicViewService.clearHistory();
        console.log("SlideTest");
        console.log("go silde test");
        $state.go('SlideTest');
    };

    $scope.setEn = function () {
        console.log("set en");
        localStorage.setItem("lang", "en");
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
        $ionicViewService.clearHistory();
        console.log("SlideTest");
        console.log("go slide test");
        $state.go('SlideTest');
    };
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
function ($scope, $stateParams, NewsService) {

    $scope.id = $stateParams.id;

    console.log("id " + $scope.id);

    $scope.model = NewsService;
    NewsService.loadArticle($scope.id);


});


app.controller("NotificationPageController", /**
 * Home Page Controller
 */
function ($scope, NewsService, $state) {

    $scope.model = {
        'Notifications': []
    };

    $scope.model.Notifications = $scope.model = NewsService;


    if (NewsService.EnableNotification) {

        console.log("INside Notification", $scope.model.Notifications);

        for (i = 0; i < $scope.model.Notifications.length; i++) {

            NewsService.LoadReadNotification(localStorage.getItem("Device_ID"), $scope.model.Notifications[i].NotificationID);
            console.log("ID : ", $scope.model.Notifications[i].NotificationID);

        }

    }

});


app.controller("messageCtrl", /**
 * Home Page Controller
 */
function ($scope) {
    $scope.getMessage = function () {
        if (localStorage.getItem("lang") === "en") {
            return "templates/en/Messages2.html"
        } else {
            return "templates/ar/Messages2.html"
        }

    };

})


app.controller("CallController", /**
 * Home Page Controller
 */
function ($scope) {
    $scope.getMessage2 = function () {
        if (localStorage.getItem("lang") === "en") {
            return "templates/en/CallTemplate.html"
        } else {
            return "templates/ar/CallTemplate.html"
        }

    };

});



