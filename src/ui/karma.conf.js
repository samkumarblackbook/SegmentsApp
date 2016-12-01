module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      { pattern: './specs.js', watched: false },
      { pattern: './assets/images/*.png', watched: false, included: false, served: true}
    ],

    proxies: {
      '/assets/images/': '/base/assets/images/'
    },
    exclude: [
    ],
    preprocessors: { },
    reporters: ['spec'],
    specReporter: {
     maxLogLines: 1
    },
    jenkinsReporter: {
      outputFile: 'test-results.xml',
      // suite: 'foobar',
      // classnameSuffix: 'browser-test'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
