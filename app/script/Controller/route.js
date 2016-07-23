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
    popular: () => {
      window.location.href = 'popular.html';
    },
    history: () => {
      window.location.href = 'history.html';
    },
    backHistory: () => {
      let ref = document.referrer;
      if (ref === '') {
        window.location.href= 'search.html';
      } else {
        javascript:window.history.back(-1);
        return false;
      }
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

  // 作品詳細ページのみ行う処理
  if (mainId === 'work-main') {
    // URLのパラメータを変数に格納
    const urlPair = Number(location.search.substring(1).split('&'));
    const inboxArray = storage.getStorage();

    // ストレージデータが存在するならデータをチェックする処理を行う
    if (inboxArray == null) {
      console.log('Not a data :)');
    } else {
      // アクセスしたページのパラメータとストレージの中にあるidが
      // 一致するか解析
      check.seekIdMovies(urlPair, inboxArray);
    }

    // 映画情報を取得する処理
    movie.getIdMovie(urlPair);

    // おすすめの作品に関する処理
    const randomNum = convert.showRandomNum();
    movie.getRandomPopularMovies(randomNum);
  }
  // inboxページのみ行う処理
  else if (mainId === 'inbox-main') {
    check.hasStorageData();
  }
  else if (mainId === 'popular-main') {
    const urlPair = Number(location.search.substring(1).split('&'));
    // パラメータがなかったらpage: 1から表示
    if(urlPair == 0 || urlPair == 1) {
      const pageId = 1; // ページ番号
      $('.is-prev').remove();
      movie.getPopularMovies(pageId);
    } else {
      // それ以外はパラメータの数値でAPIを叩く
      const pageId = urlPair;
      movie.getPopularMovies(pageId);
    }
  }
  else if (mainId === 'history-main') {
    check.hasHistoryStorageData();
  }
  else {
    return;
  }
}

// =============================================================

/**
 * urlRedirect - 特定のページにアクセスされた場合のリダイレクト処理を行う
 */
export function urlRedirect() {
  const URL = location.href;
  if ( URL === 'http://localhost:3012/work.html' ) {
      console.log('404ページを後で出す');
  }
}
