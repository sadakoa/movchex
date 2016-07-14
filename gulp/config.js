// develop PATH
const src = './app'

// Static PATH
const dest = './dist'

// deta PATH
module.exports = {
  src: src,
  dest: dest,

  stylus: {
    src: src + '/stylus/**/*.stylus',
    dest: dest + '/stylesheet',
  },
  js: {
    src: src + '/script/app.es6',
    dest: dest + '/js',
  },
  image: {
    src: src + '/images/**/*',
    dest: dest + '/images',
  },
};
