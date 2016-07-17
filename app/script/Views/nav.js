// =============================================================
// nav.js - ナビゲーションに関係する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================

// =============================================================

// グローバル変数 ================================================
const navButton = $('#nav-button');
const nav = $('#header-nav');
let flag = false;
// =============================================================

/**
 * openNav - ナビゲーションメニューを開く関数
 *
 * @param {undefined} navButton ハンバーガーメニューボタン
 * @param {undefined} nav ナビゲーションメニュー
 */
export default function openNav() {
  navButton.toggleClass('open');
  nav.toggleClass('open');

  // ナビゲーション展開時はスクロールを禁止する
  if (!flag) {
    // メニュー展開時はスクロールを禁止
    $(window).on('touchmove.noScroll', function(e) {
      e.preventDefault();
    });
    flag = true;
  }
  else {
    メニュー閉
    $(window).off('.noScroll');
    flag = false;
  }
}

// =============================================================
