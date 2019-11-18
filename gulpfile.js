"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var gulpClean = require("gulp-clean");
var browserSync = require("browser-sync");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var rename = require("gulp-rename");

sass.compiler = require("node-sass");

function compileSass() {
  return gulp
    .src("./src/assets/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
}

function clean() {
  return gulp.src("dist/", { read: false, allowEmpty: true }).pipe(gulpClean());
}

function copyHtml() {
  return gulp.src("./src/index.html").pipe(gulp.dest("./dist/"));
}
function copyImages() {
  return gulp.src(["./src/assets/img/**/*.png"]).pipe(gulp.dest("./dist/img"));
}

function serve(callback) {
  browserSync.init({
    server: "dist",
    port: 3000
  });
  callback();
}

function scripts() {
  return gulp
    .src("src/assets/scripts/*.js")
    .pipe(concat("app.js"))
    .pipe(gulp.dest("./dist/scripts"))
    .pipe(rename("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"));
}

function watch() {
  gulp.watch("src/*.html").on("all", gulp.series(copyHtml, browserSync.reload));
  gulp
    .watch("src/**/*.scss")
    .on("all", gulp.series(compileSass, browserSync.reload));
  gulp.watch("src/**/*.js").on("all", gulp.series(scripts, browserSync.reload));
}

gulp.task("build", gulp.parallel(scripts, compileSass, copyHtml, copyImages));

gulp.task("default", gulp.series(clean, "build", serve, watch));
