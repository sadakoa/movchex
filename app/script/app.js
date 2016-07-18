// =============================================================
// app.js - 複数のファイルを一つにして出力する処理を行う
// =============================================================

// ====== MOVCHEX ドキュメント ===================================

/**
 * app.js  - 複数のファイルを一つにして出力する処理を行う
 * Model - 処理の中枢(ビジネスロジック)を担う要素
    * initialize.js - HTMLが読み込まれた後に初期化する処理を行う
    * movie.js - The Movie DBのAPIに関係する処理を行う

 * View  - 表示・出力に関係する処理を担う要素
    * navigation.js - スライドメニュ-の開閉処理を行う

 * Controller - ViewとModelの処理に応じて全体を制御する要素
    * setEvent.js - イベントリスナーを初期化、格納する処理を行う

 */

// ======================================================

import initialize from './Model/initialize';
import route from './Controller/route';
import adaptiveBackground from './View/adaptiveBackground';
window.onload = () => {
  initialize();
  route();
};

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
