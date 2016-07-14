import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import stylus from 'gulp-stylus';
import raname from 'gulp-rename';
import browser from 'browser-sync';
const conf = require('../config.js');

gulp.task('stylus', () => {
 return gulp.src('app/stylus/app.styl')
.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
.pipe(stylus())
.pipe(autoprefixer())
.pipe(raname('app.css'))
.pipe(gulp.dest(conf.stylus.dest))
.pipe(browser.reload({stream:true}));
});
