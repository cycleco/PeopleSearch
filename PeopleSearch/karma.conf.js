// Karma configuration
// Generated on Tue Oct 17 2017 07:46:35 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-route/angular-route.min.js',
            // 'node_modules/angular-ui-bootstrap/ui-bootstrap-tpls-2.0.0-SNAPSHOT.js',
            // 'node_modules/angular-ui-bootstrap/ui-bootstrap-tpls-2.0.0-SNAPSHOT.min.js',
            'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'Client/*.js',
            'Client/**/*.js',
            'Tests/**/*.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'htmlDetailed'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
//            'PhantomJS'
            ,'Chrome'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        // notify karma of the available plugins
        plugins: [
            'karma-jasmine',
//            'karma-phantomjs-launcher',
            'karma-html-detailed-reporter',
            'karma-chrome-launcher'
        ],

        // configure the HTML-Detailed-Reporter to put all results in one file    
        htmlDetailed: {
            splitResults: false
        }
    });
}
