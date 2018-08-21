'use strict';
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

gulp.task('compile', function() {
    return gulp.src('./svg-min-loader.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('./lib'));
});

gulp.task('watch',function(){
    gulp.watch('./index.js',['compile']);
});

gulp.task('default',['compile','watch']);