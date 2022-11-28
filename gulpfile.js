const { task, src, dest, watch, series } = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass')(require('sass')),
    cssmin = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    jsmin = require('gulp-uglify');

task('js-build', () => {
    return src('src/*.js')
        .pipe(
            babel({
                presets: ['@babel/env'],
            })
        )
        .pipe(jsmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('build'));
});

task('scss-css', () => {
    return src('src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build'));
});

task('css-min', () => {
    return src('src/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('build'));
});

task('watch', () => {
    watch('src/*.scss', series('scss-css'));
    watch('src/*.js', series('js-build'));
    watch('src/*.css', series('css-min'));
});
