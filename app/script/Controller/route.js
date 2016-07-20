// =============================================================
// route.js - ルーティングに関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
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

export function urlDispatcher() {
  let mainId = $('.l-main').attr('id');
  if (mainId === 'work-main') {
    const urlPair = Number(location.search.substring(1).split('&'));
    console.log(urlPair); // 234
  } else {
    return;
  }
}
