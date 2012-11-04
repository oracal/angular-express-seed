'use strict';

require.config({
    paths: {
        angular: 'lib/angular/angular.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require(['angular', 'app', 'controllers', 'directives', 'filters', 'services'], function (angular) {
    angular.bootstrap(document, ['myApp']);
});
