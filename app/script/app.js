// ライブラリ
import * as load from './load';
import theMovieDb from 'themoviedb-javascript-library';

// ======================================================

// イベントの初期化
window.onload = () => {
  load.setEvent();
};

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

// idが1721のキーワードを取得
theMovieDb.discover.getMovies({}, successCB, errorCB);
function successCB(data) {
  var data = JSON.parse(data);
  console.log(data);
};
function errorCB(data) {
  console.log("Error callback: " + data);
};
