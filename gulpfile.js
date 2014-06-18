/*global require*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  ngmin = require('gulp-ngmin'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  clean = require('gulp-clean'),
  nodemon = require('gulp-nodemon'),
  jade = require('gulp-jade'),
  ngtemplates = require('gulp-angular-templatecache'),
  compass = require('gulp-compass'),
  bowerFiles = require('gulp-bower-files');

gulp.task('watch', function () {
  gulp.watch(['app/**/*.sass'], ['sass']);
  gulp.watch(['app/index.jade', 'app/partials/*.jade'], ['jade:index']);
  gulp.watch(['app/**/*.js', '!app/**/*.spec.js'], ['copy:js']);
  gulp.watch(['app/**/*.jade', '!app/index.jade', '!app/partials'], ['templates']);
});

gulp.task('dev:build', ['copy:js', 'templates', 'jade:index', 'sass', 'copy:vendor']);

gulp.task('dev', ['dev:build', 'serve:dev', 'watch']);

gulp.task('clean:dev', function () {
  gulp.src('dev/**', {read: false, force: true})
    .pipe(clean());
});

gulp.task('copy:vendor', function () {
  bowerFiles()
    .pipe(gulp.dest('dev/vendor'));
});

gulp.task('copy:js', function () {
  gulp.src(['app/**/*.js', '!app/**/*.spec.js'])
    .pipe(gulp.dest('dev'));
});

gulp.task('jade:index', function () {
  gulp.src('app/index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('dev'));
});

gulp.task('sass', function () {
  gulp.src('app/app.sass')
    .pipe(compass({
      project: __dirname,
      css: 'dev',
      sass: 'app'
    }));
});

gulp.task('templates', function () {
  gulp.src(['app/**/*.jade', '!app/index.jade', '!app/partials/**'])
    .pipe(jade({pretty: true}))
    .pipe(ngtemplates('marvel.tpls.js', {module: 'marvelapp', root: '/'}))
    .pipe(gulp.dest('dev'));
});

gulp.task('serve:dev', function () {
  nodemon({
    script: 'srv/server.js',
    ext: 'js',
    ignore: [
      'app',
      'node_modules',
      'build',
      'test',
      'gulpfile.js',
      'karma.conf.js'
    ]})
    .on('restart', function () {
      console.log('restarted dog!');
    });

});