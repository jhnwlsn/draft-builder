'use strict';

var gulp = require("gulp"),
    connect = require ("gulp-connect"),
    sass = require("gulp-sass");

gulp.task("connect", function() {
  connect.server({
    root: "source",
    livereload: true
  });
});

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
})

gulp.task("default", ["connect", "sass", "watch"]);