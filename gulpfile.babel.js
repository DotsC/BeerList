const gulp = require('gulp'),
 connect = require('gulp-connect'),
 sass = require('gulp-sass'),
 babel = require('gulp-babel'),
 print = require('gulp-print');

const buildPath = './app/build';
const sourcePath = './app/src';

const cssPath = `${buildPath}/css/`;
const jsPath = `${buildPath}/js/`;

const allHtmlPath = `${sourcePath}/**/*.html`;
const allSassPath = `${sourcePath}/css/sass/**/*.scss`;
const allCssPath = `${sourcePath}/css/*.min.css`;
const allJSPath = `${sourcePath}/js/**/*.js`;

/* SASS & CSS Processing and copy */
gulp.task('sass', () => {
  return gulp.src(`${allSassPath}`)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(`${cssPath}`));
});
gulp.task('css', () => {
  return gulp.src(`${allCssPath}`)
    .pipe(gulp.dest(`${cssPath}`));
});
/* Util watch for Sass Dev */
gulp.task('sass:watch', () => {
  gulp.watch(`${allSassPath}`, ['sass']);
});

/*JS Processing and copy */
gulp.task('js', () => {
  return gulp.src(`${allJSPath}`)
    .pipe(print())
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(`${jsPath}`));
});

/*html Processing and copy */
gulp.task('html', () => {
  return gulp.src(`${allHtmlPath}`)
   .pipe(connect.reload())
   .pipe(gulp.dest(`${buildPath}`));
});

/* Connect / Watch and Defaults. */
gulp.task('connect', () => {
  connect.server({
    root: `${buildPath}`,
    livereload: true
  });
});

gulp.task('watch', () => {
 gulp.watch([`${allHtmlPath}`, `${allSassPath}`,`${allJSPath}`], ['html', 'sass','js']);
 //gulp.watch([`${allHtmlPath}`], ['html']);
});

gulp.task('build', ['js', 'html', 'sass', 'css']);

gulp.task('default', ['connect', 'watch']);
