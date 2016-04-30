var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Set up BroswerSync
gulp.task('browserSync', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  });
});

// Compile SASS and autoprefix.
gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer( {
      browsers: ['> 5%']
    }))
    .pipe(gulp.dest('./css'));
});

// Watch SASS folder and index.html for changes and then reload.
gulp.task('watch', ['browserSync'], function() {
  gulp.watch('./sass/**/*.scss', ['sass', browserSync.reload]);
  gulp.watch('index.html', browserSync.reload);
});
