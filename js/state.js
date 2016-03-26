/**
 * Created by fantom on 2/18/16.
 */
var app = angular.module('app.states', []);

app.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $stateProvider
        .state('index', {
            url: '/',
            abstract: true,
            templateUrl: 'index.html'
        }).state('splash', {
            url: '/splash',
            controller: 'splashController',
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=true;
                var templateName = 'templates/splash.html';
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('splash2', {
            url: '/splash2',
            controller: 'splashController',
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=true;
                var templateName = 'templates/splash2.html';
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('home', {
            url: "/home",
            cache: false,
            historyRoot: true,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/homePage.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/homePage.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('about', {
            url: "/about",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/AboutUs.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/AboutUs.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('ChairmanWord', {
            url: "/ChairmanWord",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
              $rootScope.SlidePage=false;
                var templateName = 'templates/ar/ChairmanWord.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/ChairmanWord.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('objective', {
            url: "/objective",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
             $rootScope.SlidePage=false;
                var templateName = 'templates/ar/objective.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/objective.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('regulations', {
            url: "/regulations",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Regulations.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Regulations.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('legislation', {
            url: "/legislation",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/legislation.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/legislation.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('investment', {
            url: "/investment",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Investment.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Investment.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('statistics', {
            url: "/statistics",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Statistics.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Statistics.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('annual_report', {
            url: "/annual_report",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/annual_report.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/annual_report.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('QueryingLicense', {
            url: "/QueryingLicense",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/QueryingLicense.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/QueryingLicense.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('LicenseRenewal', {
            url: "/LicenseRenewal",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/LicenseRenewal.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/LicenseRenewal.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('activitiesGuide', {
            url: "/activitiesGuide",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/activitiesGuide.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/activitiesGuide.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('irregularitiesList', {
            url: "/irregularitiesList",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/irregularitiesList.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/irregularitiesList.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('knowUs', {
            url: "/knowUs",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/knowUs.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/knowUs.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('departmentObjectives', {
            url: "/departmentObjectives",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/departmentObjectives.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/departmentObjectives.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('Suggestion', {
            url: "/Suggestion",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Suggestion.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Suggestion.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('complains', {
            url: "/complains",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/ComplainsAndSuggestion.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/ComplainsAndSuggestion.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('contact', {
            url: "/contact",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/ContactUs.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/ContactUs.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('manual', {
            url: "/manual",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/CustomerManual.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/CustomerManual.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('MediaServices', {
            url: "/MediaServices",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/MediaServices.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/MediaServices.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('mediaCenter', {
            url: "/mediaCenter",
            cache: false,
            controller: 'MediaCenterPageController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/MediaCenter.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/MediaCenter.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('messages', {
            url: "/messages",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Messages.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Messages.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('notification', {
            url: "/notification",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Notifications.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Notifications.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('registration', {
            url: "/registration",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Registration.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Registration.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('services', {
            url: "/services",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Services.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Services.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('issuancePermit', {
            url: "/issuancePermit",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/issuancePermit.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/issuancePermit.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('cancelCompany', {
            url: "/cancelCompany",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/cancelCompany.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/cancelCompany.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('cancelBusinessCompany', {
            url: "/cancelBusinessCompany",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/cancelBusinessCompany.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/cancelBusinessCompany.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('AwarenessMessage', {
            url: "/AwarenessMessage",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/AwarenessMessage.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/AwarenessMessage.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('GeneralRequirements', {
            url: "/GeneralRequirements",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/GeneralRequirements.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/GeneralRequirements.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('SpecialRequirements', {
            url: "/SpecialRequirements",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/SpecialRequirements.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/SpecialRequirements.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('OnlineServices', {
            url: "/OnlineServices",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/OnlineServices.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/OnlineServices.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('servicesGuide', {
            url: "/servicesGuide",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/servicesGuide.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/servicesGuide.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('createPermit', {
            url: "/createPermit",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/createPermit.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/createPermit.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('renewPermit', {
            url: "/renewPermit",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/renewPermit.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/renewPermit.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('editPermit', {
            url: "/editPermit",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/editPermit.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/editPermit.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('cancelPermit', {
            url: "/cancelPermit",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/cancelPermit.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/cancelPermit.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('legalForms', {
            url: "/legalForms",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/legalForms.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/legalForms.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('details', {
            url: "/details",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/details.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/details.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('eRegistration', {
            url: "/eRegistration",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/eRegistration.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/eRegistration.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('Enquiry', {
            url: "/Enquiry",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/Enquiry.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/Enquiry.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('renewal', {
            url: "/renewal",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/renewal.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/renewal.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('SlideTest', {
            url: "/SlideTest",
            cache: false,
            controller: 'mainController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=true;
                var templateName = 'templates/ar/SlideTest.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/SlideTest.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        }).state('MediaCenterDetails', {
            url: "/MediaCenterDetails?id",
            cache: false,
            controller: 'MediaCenterDetailsPageController',
            nativeTransitions: {
                "type": "flip",
                "direction": "up"
            },
            templateProvider: function ($http, $templateCache, $rootScope) {
                $rootScope.SlidePage=false;
                var templateName = 'templates/ar/MediaCenterDetails.html';
                if ($rootScope.appLang === "en") {
                    templateName = 'templates/en/MediaCenterDetails.html';
                }
                var tpl = $templateCache.get(templateName);
                if (tpl) {
                    return tpl;
                }
                return $http
                    .get(templateName)
                    .then(function (response) {
                        tpl = response.data;
                        $templateCache.put(templateName, tpl);
                        return tpl;
                    });
            }
        });

    $urlRouterProvider.otherwise('/splash');
    $ionicConfigProvider.views.maxCache(2);
    $ionicConfigProvider.backButton.text('').icon('my-back-button').previousTitleText(false);

});

