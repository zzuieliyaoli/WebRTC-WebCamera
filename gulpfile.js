var gulp = require("gulp");
var sass = require("gulp-sass")
var watch = require('gulp-watch');

gulp.task("sass", function() {
    gulp.src("./src/style/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./des/style"));
});

gulp.task("sass:watch", function() {
    gulp.watch("./src/style/*.scss", ["sass"]);
});


gulp.task("default", ["sass", "sass:watch"]);
