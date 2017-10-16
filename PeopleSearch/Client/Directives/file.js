(function() {
    'use strict';

    angular
        .module('app')
        .directive('file', file);

    file.$inject = ['$window'];
    
    function file ($window) {
        // Usage:
        //     <... file ...>
        // Creates:
        // 
        var directive = {
            scope: {
                file: '='
            },
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, el, attrs) {
            el.bind('change', function (event) {
                var file = event.target.files[0];
                scope.file = file ? file : undefined;
                scope.$apply();
            });
        }
    }

})();