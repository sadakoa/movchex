import gulp from 'gulp';
const conf = require('../config.js');

gulp.task('build', ['js', 'stylus', 'jade'])
