var gulp = require('gulp'),
  browsersync = require('browser-sync'),
  sass = require('gulp-sass');

  //configure browsersync
  gulp.task('browser-sync', function(){
    var files = [
      './style.css',
      './*.php'
    ];

    //initiliaze browsersync with a php server.
    browsersync.init(files, {
       proxy:"http://localhost:8888/"
    });
  });

  //configure sass task to run when the specified .scss files change
  //browsersync will also reload browsers.
  gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
      .pipe(sass({
        'outputStyle': 'compressed'
      }))
      .pipe(gulp.dest('./'))
      .pipe(browsersync.stream());
  });

  //Create the default task that can be called using gulp
  // the task will process sass, run browser-sync and start watching for changes.
  gulp.task('default', ['sass','browser-sync'], function() {
    gulp.watch("sass/**/*.scss", ['sass']);
  });
