// =============================================================
// app.js - 複数のファイルを一つにして出力する処理を行う
// =============================================================

// ====== MOVCHEX ドキュメント ===================================

/**
 * app.js  - 複数のファイルを一つにして出力する処理を行う
  ---------------------------------------------------------
 * Model - 処理の中枢(ビジネスロジック)を担う要素
    * initialize.js - HTMLが読み込まれた後に初期化する処理を行う
    * movie.js - The Movie DBのAPIに関係する処理を行う
  ---------------------------------------------------------
 * View  - 表示・出力に関係する処理を担う要素
    * navigation.js - スライドメニュ-の開閉処理を行う
    * adaptiveBackground.js - 作品詳細のドミナントカラーに関する処理を行う
    * renderResult.js - APIから返されたデータを元にDOMに反映させる処理を行う
  ---------------------------------------------------------
 * Controller - ViewとModelの処理に応じて全体を制御する要素
    * route.js - ルーティングに関する処理を行う
    * setEvent.js - イベントリスナーを初期化、格納する処理を行う
    * sendKeyword.js - 検索ページでユーザー入力を受け取る処理を行う
  ---------------------------------------------------------
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

// jquery.adaptive-backgrounds.jsのオプション
const adaptive_params = {
  selector: '.p-movie-info__image',
  parent: '.l-work-main',
  normalizeTextColor: true,
  normalizedTextColors: { dark: '#000', light: '#fff' },
  lumaClasses: { light: 'ab-light', dark: 'ab-dark' },
};

$.adaptiveBackground.run(adaptive_params);

// ======================================================
