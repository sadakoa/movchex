// =============================================================
// route.js - ルーティングに関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import Dispatcher from 'url-dispatcher';
import * as movie from '../Model/movie';
// import * as convert from '../Model/convert';
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
    '/work.html': function(aId) {
      const id = Number(aId);
      movie.getIdMovie(id);
      // convert.changeBackground();
    },
  },
});
