// =============================================================
// route.js - ルーティングに関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import Dispatcher from 'url-dispatcher';
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


/**
 * dispatcher - URLによって処理を振り分ける関数式
 */
export const dispatcher = new Dispatcher({
  routes: {
    '/index.html': function() {
      console.log('Top');
    },
    '/search.html': function() {
      console.log('Search');
    },
    '/work.html': function() {
      console.log('Work');
    },
  }
});
