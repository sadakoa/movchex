// =============================================================
// route.js - ルーティングに関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as movie from '../Model/movie';
import * as convert from '../Model/convert';
import * as check from '../Model/check';
import * as storage from '../Model/storage';
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
    const inboxArray = storage.getStorage();

    // ストレージデータが存在するならデータをチェックする処理を行う
    if (inboxArray == null) {
      console.log('Not a data :)');
    } else {
      check.seekIdMovies(urlPair, inboxArray);
    }

    // 映画情報を取得する処理
    movie.getIdMovie(urlPair);

    // おすすめの作品に関する処理
    const randomNum = convert.showRandomNum();
    movie.getRandomPopularMovies(randomNum);
  } else {
    return;
  }
}
