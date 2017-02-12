module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'src/javascript/index.js',
            'spec.js'
        ],

        preprocessors: {
            'src/javascript/index.js': ['webpack', 'sourcemap'],
            'spec.js': ['webpack']
        },

        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: [/node_modules/, /public/],
                        loader: 'babel'
                    }, {
                        test: /\.scss/,
                        loader: 'style!css!sass!autoprefixer?browsers=last 2 versions'
                    }, {
                        test: /\.json$/,
                        loader: 'json'
                    }, {
                        test: /\.html$/,
                        loader: 'raw'
                    }
                ]
            },
            watch: true
        },

        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-sourcemap-loader'),
            require('karma-chrome-launcher')
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

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
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
