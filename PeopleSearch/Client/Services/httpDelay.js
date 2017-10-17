(function () {
    'use strict';

    var httpDelay = function($timeout, httpDelayConfig) {
        return {
            "response": function(response) {
                return $timeout(function () {
                        return response;
                    },
                    httpDelayConfig.milliseconds);
            }
        }
    };

    var app = angular.module('app');

    httpDelay.$inject = ['$timeout', 'httpDelayConfig'];

    app.service('httpDelayConfig', function () {
        return {
            milliseconds: 500
        };
    });

    app.config(function($httpProvider) {
        $httpProvider.interceptors.push(httpDelay);
    });

})();