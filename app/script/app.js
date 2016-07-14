import $ from 'jquery';

const TOUCH = ('ontouchstart' in document) ? 'touchstart' : 'click';

const navButton = $('#nav-button');
const nav       = $('#header-nav');

navButton.on(TOUCH, function(e) {
  navButton.toggleClass('open');
  nav.toggleClass('open');
});
