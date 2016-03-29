// *************************************
//
//   Solomon - Gulp Setup
//
// *************************************

'use strict';

// -------------------------------------
//   Foundation
// -------------------------------------

// ----- Requires ----- //

var gulp = require("gulp"),
    connect = require ("gulp-connect"),
    sass = require("gulp-sass");

// ----- Task: Default ----- //

gulp.task("default", ["connect", "sass", "watch"]);

// -------------------------------------
//   Server
// -------------------------------------

gulp.task("connect", function() {
  connect.server({
    root: "source",
    livereload: true
  });
});

// -------------------------------------
//   Assets
// -------------------------------------

gulp.task('html', function () {
  gulp.src('./source/*.html')
    .pipe(connect.reload());
});

gulp.task("sass", function() {
  return gulp.src("./source/stylesheets/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest('./source/stylesheets'))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch(["./source/**/*.html"], ["html"]);
  gulp.watch(['./source/**/*.sass'], ["sass"]);
});