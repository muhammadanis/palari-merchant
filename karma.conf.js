module.exports = function(config){
  config.set({

    basePath : './',

    files : [      
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',            
      'app/app.module.js',      
      'app/app.routes.js',
      'app/components/**/*.js',
      'unit-test/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};