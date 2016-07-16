import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import stylus from 'gulp-stylus';
import pleeease from 'gulp-pleeease';
import browser from 'browser-sync';
const conf = require('../config.js');

gulp.task('stylus', () => {
 return gulp.src('app/stylus/app.styl')
.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
.pipe(stylus())
.pipe(pleeease({
  out: 'app.min.css',
}))
.pipe(gulp.dest(conf.stylus.dest))
.pipe(browser.reload({stream:true}));
});
