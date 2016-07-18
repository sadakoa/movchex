// =============================================================
// app.js - 複数のファイルを一つにして出力する処理を行う
// =============================================================
/**
 * app.js     - 複数のファイルを一つにして出力する処理を行う
 * Model      - 処理の中枢(ビジネスロジック)を担う要素
    *

 * View       - 表示・出力に関係する処理を担う要素
    *

 * Controller - ViewとModelの処理に応じて全体を制御する要素
    *

 */

// =============================================================

import * as load from './Model/load';

// ======================================================

// イベントの初期化
window.onload = () => {
  load.setEvent();
};

// movie.showPopularMovies();

// ======================================================

// ルーティング
let routes = new Vue({
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

// ======================================================

/**
 * jquery.adaptive-backgrounds.jsの実行関数
 */
const adaptive_params = {
  selector: '.p-movie-info__image',
  // 背景色を適用する対象セレクタ
  parent: '.l-work-main',
  // 背景色の明度に合わせてフォントカラーを変更するかどうか
  normalizeTextColor: true,
  // 明度に合わせたフォントカラー
  normalizedTextColors: {dark: '#000', light: '#fff'},
  // 明度に合わせたクラス適用
  lumaClasses: {light: 'ab-light', dark: 'ab-dark'}
};
// 実行
$.adaptiveBackground.run(adaptive_params);

// ======================================================
