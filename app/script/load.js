// =============================================================
// load.js - HTMLが読み込まれた後に初期化、変数を格納する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import openNav from './Views/nav';
// =============================================================

// グローバル変数 ================================================
const navButton = $('#nav-button');
const TOUCH = ('ontouchstart' in document) ? 'touchstart' : 'click';
// =============================================================

/**
 * SetEvent - イベントリスナーを初期化する関数
 */
export const setEvent = () => {
  navButton.on(TOUCH, function(e) {
    openNav();
  });
};

// =============================================================
