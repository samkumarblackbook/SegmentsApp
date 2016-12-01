var gulp  = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
historyApiFallback = require('connect-history-api-fallback')
var webpack = require('webpack-stream');
var exec = require('gulp-exec');
var KarmaServer = require('karma').Server;
var spawn = require('child_process').spawn;
var sourcemaps = require('gulp-sourcemaps')

var startpaths = {
  js:'./**/*.ts',
  scss: './scss/**/*.scss',
  assets:'./assets/**/*',
  templates: './app/**/*.pug',
  html:'./index.html'
}

var bundlepaths = {
  start:'./js/main.ts',
  output:'./build/scripts',
  notest:['./**/*.ts','!./**/*.spec.ts'],
}


var endpaths = {
  css: './build/css',
  assets:'./build/assets',
  html: './build',
  templates:'./build'
}



gulp.task('serve', ['bundle'],function() {
    browserSync.init({
      server: {
        baseDir: "./build",
        //this is rerquired for broswer sync to work with spa
        middleware: [ historyApiFallback() ]
      }
    });
});


gulp.task('sass', function () {
  return gulp.src(startpaths.scss)
  .pipe(sourcemaps.init())
  .pipe(sass({
    style: 'expanded',
  }).on('error', sass.logError))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(endpaths.css))
});

gulp.task('assets', function () {
  return gulp.src(startpaths.assets)
  .pipe(gulp.dest(endpaths.assets))
});

gulp.task('reload',['sass'], function() {
    browserSync.reload()
});

gulp.task('reload-bundle',['bundle'], function() {
    browserSync.reload()
});

gulp.task('html', function () {
  return gulp.src(startpaths.html)
  .pipe(gulp.dest(endpaths.html))
});


gulp.task('bundle',function(){
  return gulp.src(bundlepaths.start)
  .pipe(webpack( require('./webpack.config.js') ))
  .on('error', function handleError() {
     this.emit('end'); // Recover from errors
   })
  .pipe(gulp.dest(bundlepaths.output));
})

gulp.task('test-bundle',function(){
  return gulp.src('./testing/spec.entry.ts')
  .pipe(webpack(require('./webpack.test.config.js')))
  .on('error', function handleError(){
    this.emit('end'); // Recover from errors
  })
  .pipe(gulp.dest('./'));
})


gulp.task('run-test',['test-bundle'],function(){
  var karmaServer = new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  });

  karmaServer.on('browser_error', function(browser, err) {
    console.log(err);
    throw err;
  });

  karmaServer.on('run_complete', function(browser, results) {
    // if(results.failed) {
    //   // throw new Error('Karma: Frontend Unit Tests Failed');
    //   process.exit();
    // }
    process.exit();
  });

  karmaServer.start();
})

gulp.task('karma',function(){
  var cmd = spawn('karma', ['start'], {stdio: 'inherit'});
  cmd.on('close', function (code) {
    console.log('my-task exited with code ' + code);
  });
})



gulp.task('default', ['html','sass','assets', 'serve'],function(){
  gulp.watch([bundlepaths.notest,startpaths.templates],['reload-bundle']);
  gulp.watch([startpaths.scss,startpaths.templates],['reload']);
  gulp.watch([startpaths.assets],['assets','reload']);
});
