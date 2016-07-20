// =============================================================
// route.js - ルーティングに関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import Dispatcher from 'url-dispatcher';
import adaptiveBackground from '../View/adaptiveBackground';
// =============================================================

/**
 * setRoutes - リンク先を管理するVueインスタンス
 */
export const setRoutes = new Vue({
  el: '#app',
  methods: {
    inbox: () => {
      window.location.href = 'index.html';
    },
    search: () => {
      window.location.href = 'search.html';
    },
    work: () => {
      window.location.href = 'work.html';
    },
    backHistory: () => {
      javascript:window.history.back(-1);
      return false;
    },
  },
});

// =============================================================

/**
 * dispatcher - URLによって処理を振り分ける関数式
 */
export const dispatcher = new Dispatcher({
  routes: {
    // index ============================================
    '/index.html': function() {
    },
    // search ============================================
    '/search.html': function() {
    },
    // work ============================================
    '/work.html': function(foo) {
      console.log(Number(foo));

      // adaptive-backgrounds.jsのオプション
      const adaptive_params = {
        selector: '.p-movie-info__image',
        parent: '.l-work-main',
        normalizeTextColor: true,
        normalizedTextColors: { dark: '#000', light: '#fff' },
        lumaClasses: { light: 'ab-light', dark: 'ab-dark' },
      };
      // adaptive-backgrounds.jsを実行
      $.adaptiveBackground.run(adaptive_params);
    },
  },
});
