var serv = angular.module('app.services', []);

serv.service("NewsService", function ($http, $q, $ionicPopup) {
    var self = {
        'Domain': 'http://ded.sdg.ae/_MobFiles/AjmanDED_MobService.asmx',
        'PhotoDomain': 'http://ded.sdg.ae',
        'ImageUrl': '',
        'NewsArticles': [],
        'Article': [],
        'replace': function (str, find, replace) {
            return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
        }
        ,
        'loadRecentArticles': function (items) {
            var d = $q.defer();
            $http.get("http://ded.sdg.ae/_MobFiles/AjmanDED_MobService.asmx/News_Get?NumberOfItems=" + items)
                .success(function success(data) {
                    //  data = data.split('~').join('http://24.ae');
                    var x2 = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                    x2 = x2.replace("<string xmlns=\"http://AjmanDED-MobData.org/\">", "");
                    x2 = x2.replace("</string>", "");

                    //x2 = x2.replace("~",self.PhotoDomain);
                    //     data.replace('<string xmlns=\"http://AjmanDED-MobData.org">', '');
                    //   data.replace('</string>', '');
                    //var old = JSON.stringify(data).split('~').join('http://24.ae');

                    var NewArray = JSON.parse(x2);
                    self.NewsArticles = NewArray;
                    console.log(self.NewsArticles);
                    d.resolve();
                })
                .error(function error(msg) {
                    console.log(msg);
                    d.reject();
                });
            return d.promise;
        },
        'loadArticle': function (id) {
            var d = $q.defer();
            $http.get('http://ded.sdg.ae/_MobFiles/AjmanDED_MobService.asmx/News_GetById?NewsID=' + id)
                .success(function success(data) {

                    var x2 = data.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>", "");
                    x2 = x2.replace("<string xmlns=\"http://AjmanDED-MobData.org/\">", "");
                    x2 = x2.replace("</string>", "");

                    var NewArray = JSON.parse(x2);
                    self.Article = NewArray;
                    console.log(self.Article);
                    d.resolve();
                })
                .error(function error(msg) {
                    console.log(msg);
                    d.reject();
                });
            return d.promise;
        },

    };
    return self;

});