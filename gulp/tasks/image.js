import gulp from 'gulp';
import browser from 'browser-sync';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import changed from 'gulp-changed'
const conf = require('../config.js');

gulp.task('image', () => {
  return gulp.src(conf.image.src)
  .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
  .pipe(changed(conf.image.dest))
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(conf.image.dest));
});
