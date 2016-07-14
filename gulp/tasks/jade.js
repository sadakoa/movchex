import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import jade from 'gulp-jade';
import browser from 'browser-sync';
const conf = require('../config.js');

gulp.task('jade', () => {
gulp.src('app/jade/**/!(_)*.jade')
.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
.pipe(jade({pretty: true}))
.pipe(gulp.dest('./dist'));
});
