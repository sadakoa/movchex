import gulp from 'gulp';
import browser from 'browser-sync';
let conf = require('../config.js');

gulp.task('reload', () => {
  browser.reload();
});

gulp.task('server', () => {
  browser({
    server: {
      baseDir: './dist',
      index: 'index.html'
      }
  });
});

gulp.task('default', ['server', 'jade', 'stylus', 'image', 'watch'])
