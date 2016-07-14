import gulp from 'gulp';
import browser from "browser-sync";
import watch from 'gulp-watch';
const conf = require('../config.js');

gulp.task('watch', ['server'], () => {
  watch('app/stylus/**/*.styl', () => {
    gulp.start(['stylus']);
  });
  watch(conf.js.src, () => {
    gulp.start(['js']);
  });
  watch('./app/jade/**/*.jade', () => {
    gulp.start(['jade']);
  });
  watch('./dist/*.html', () => {
    gulp.start(['reload']);
  });
  watch(conf.image.src, () => {
    gulp.start(['image']);
  });
});
