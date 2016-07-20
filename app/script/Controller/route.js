// =============================================================
// route.js - ルーティングに関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as movie from '../Model/movie';
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
 * urlDispatcher - URL別で実行する処理を分ける関数
 */
export function urlDispatcher() {
  // .l-mainのID名
  let mainId = $('.l-main').attr('id');
  if (mainId === 'work-main') {
    // URLのパラメータを変数に格納
    const urlPair = Number(location.search.substring(1).split('&'));
    movie.getIdMovie(urlPair);
  } else {
    return;
  }
}
