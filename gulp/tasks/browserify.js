import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import handleErrors from '../../handleErrors.js';
import browser from 'browser-sync';
const conf = require('../config.js');

gulp.task('js', () => {
browserify({
entries: [conf.js.src]
})
.transform(babelify)
.bundle()
.on('error', handleErrors)
.pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
.pipe(source('app.js'))
.pipe(gulp.dest(conf.js.dest))
.pipe(browser.reload({stream:true}));
});
