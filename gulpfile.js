const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

// ------------------------------------------ Enter your new path here ---------------------------------------------- //
let paths = {
    src: [
        '28'
    ]
};

// ------------------------------------------ minify js ---------------------------------------------- //
function minifyJsTask() {
    return gulp.src(`./src/js/*`)
        // change js to js 5
        // .pipe(babel({
        //     presets: ['@babel/env']
        // }))
        // minify js
        .pipe(uglify())
        .pipe(gulp.dest(`dist/js`));
}

// minify all js
gulp.task('minify-all-js', gulp.parallel(
    minifyJsTask
));
// ------------------------------------------ end minify js ---------------------------------------------- //

// ------------------------------------------ minify html ---------------------------------------------- //
function minifyHtmlTask() {
    return gulp.src(`./src/*.html`)
        // minify html
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(`dist/`));
}

// minify all html
gulp.task('minify-all-html', gulp.parallel(
    minifyHtmlTask
));
// ------------------------------------------ end minify html ---------------------------------------------- //

// ------------------------------------------ minify css ---------------------------------------------- //
function minifyCssTask() {
    return gulp.src(`./src/css/*.css`)
        // minify css
        // .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(`dist/css`));
}

// minify all css
gulp.task('minify-all-css', gulp.parallel(
    minifyCssTask
));
// ------------------------------------------ end minify css ---------------------------------------------- //

// ------------------------------------------ move font ---------------------------------------------- //
function moveFontTask() {
    return gulp.src(`./src/font/**/*`)
        .pipe(gulp.dest(`dist/font`));
}

// move all font
gulp.task('move-all-font', gulp.parallel(
    moveFontTask
));
// ------------------------------------------ end move font ---------------------------------------------- //

// ------------------------------------------ move img ---------------------------------------------- //
function moveImgTask() {
    return gulp.src(`./src/img/**/*`)
        .pipe(gulp.dest(`dist/img`));
}

// move all img
gulp.task('move-all-img', gulp.parallel(
    moveImgTask
));
// ------------------------------------------ end move img ---------------------------------------------- //

// ------------------------------------------ move icon ---------------------------------------------- //
function moveIconTask() {
    return gulp.src(`./src/icon/**/*`)
        .pipe(gulp.dest(`dist/icon`));
}

// move all icon
gulp.task('move-all-icon', gulp.parallel(
    moveIconTask
));
// ------------------------------------------ end move icon ---------------------------------------------- //


gulp.task('default',
    gulp.series('minify-all-html', 'minify-all-css', 'minify-all-js', 'move-all-font', 'move-all-img', 'move-all-icon')
);

