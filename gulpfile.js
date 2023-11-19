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
function minifyJsTask(number) {
    return gulp.src(`./src/${number}/js/*.js`)
        // change js to js 5
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // minify js
        .pipe(uglify())
        .pipe(gulp.dest(`dist/${number}/js`));
}

// minify all js
gulp.task('minify-all-js', gulp.parallel(
    ...paths.src.map(number => () => minifyJsTask(number))
));
// ------------------------------------------ end minify js ---------------------------------------------- //

// ------------------------------------------ minify html ---------------------------------------------- //
function minifyHtmlTask(number) {
    return gulp.src(`./src/${number}/*.html`)
        // minify html
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(`dist/${number}/`));
}

// minify all html
gulp.task('minify-all-html', gulp.parallel(
    ...paths.src.map(number => () => minifyHtmlTask(number))
));
// ------------------------------------------ end minify html ---------------------------------------------- //

// ------------------------------------------ minify css ---------------------------------------------- //
function minifyCssTask(number) {
    return gulp.src(`./src/${number}/css/*.css`)
        // minify css
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(`dist/${number}/css`));
}

// minify all css
gulp.task('minify-all-css', gulp.parallel(
    ...paths.src.map(number => () => minifyCssTask(number))
));
// ------------------------------------------ end minify css ---------------------------------------------- //

// ------------------------------------------ move font ---------------------------------------------- //
function moveFontTask(number) {
    return gulp.src(`./src/${number}/font/**/*`)
        .pipe(gulp.dest(`dist/${number}/font`));
}

// move all font
gulp.task('move-all-font', gulp.parallel(
    ...paths.src.map(number => () => moveFontTask(number))
));
// ------------------------------------------ end move font ---------------------------------------------- //

// ------------------------------------------ move img ---------------------------------------------- //
function moveImgTask(number) {
    return gulp.src(`./src/${number}/img/**/*`)
        .pipe(gulp.dest(`dist/${number}/img`));
}

// move all img
gulp.task('move-all-img', gulp.parallel(
    ...paths.src.map(number => () => moveImgTask(number))
));
// ------------------------------------------ end move img ---------------------------------------------- //

// ------------------------------------------ move icon ---------------------------------------------- //
function moveIconTask(number) {
    return gulp.src(`./src/${number}/icon/**/*`)
        .pipe(gulp.dest(`dist/${number}/icon`));
}

// move all icon
gulp.task('move-all-icon', gulp.parallel(
    ...paths.src.map(number => () => moveIconTask(number))
));
// ------------------------------------------ end move icon ---------------------------------------------- //


gulp.task('default',
    gulp.series('minify-all-html', 'minify-all-css', 'minify-all-js', 'move-all-font', 'move-all-img', 'move-all-icon')
);

