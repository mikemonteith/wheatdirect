const gulp = require("gulp");
const handlebars = require("handlebars");
const gulpHandlebars = require("gulp-compile-handlebars");
const rename = require("gulp-rename");
const rollup = require("rollup-stream");
const source = require("vinyl-source-stream");

const buildConfig = require("./buildConfig.js");

const buildHtml = done => {
  return buildConfig().then(config => {
    var templateData = {
      config: JSON.stringify(config)
    };
    console.log("templatedata", templateData);
    var options = {};
    return gulp
      .src("web/index.hbs")
      .pipe(gulpHandlebars(templateData, options))
      .pipe(rename("index.html"))
      .pipe(gulp.dest("dist"));
  });
};

const buildJS = () => {
  return rollup({
    input: "web/js/main.js",
    format: "iife"
  })
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./dist"));
};

const build = gulp.parallel(buildJS, buildHtml);

gulp.task("build:html", buildHtml);
gulp.task("build:js", buildJS);

gulp.task("build", build);

const watch = () => {
  return gulp.watch(["web/**/*", "config.yml"], build);
};
gulp.task("watch", watch);
