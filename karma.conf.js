var webpackConfig = require('./webpack.config.js');
//webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    reporters: ['mocha', 'progress', 'notify'],
    port: 9876,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome',
      //'Firefox',
      //'Safari',
      //'Opera',
    ],
    singleRun: false,
    autoWatchBatchDelay: 300,

    files: [
      './src/index.js',
      './test/**/*.js'
    ],

    mochaReporter: {
      colors: {
        success: 'bgGreen',
        info: 'blue',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },

    preprocessors: {
      './src/index.js': ['webpack'],
      './test/**/*.js': ['webpack']
    },

    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-opera-launcher',
      'karma-safari-launcher',
      'karma-webpack',
      'karma-babel-preprocessor',
      'karma-mocha-reporter',
      'karma-notify-reporter',
    ],

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}
