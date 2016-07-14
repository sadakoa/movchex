// ライブラリ
import $ from 'jquery';
import Vue from 'vue';

// グローバル変数
const TOUCH = ('ontouchstart' in document) ? 'touchstart' : 'click';

// HTML読み込み時実行
window.onload = () => {
};

// 変数
const navButton = $('#nav-button');
const nav       = $('#header-nav');

// イベント
navButton.on(TOUCH, function(e) {
  navButton.toggleClass('open');
  nav.toggleClass('open');
  // ナビを開いた時はスクロールさせない
  $(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
  });
});
