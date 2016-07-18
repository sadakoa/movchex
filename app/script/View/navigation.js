// =============================================================
// navigation.js - スライドメニュ-の開閉処理を行う
// =============================================================

// グローバル変数 ================================================
const navButton = $('#nav-button');
const nav = $('#header-nav');
let flag = false;
// =============================================================

/**
 * openNav - スライドメニューを開く関数
 *
 * @param {undefined} navButton ハンバーガーメニューボタン
 * @param {undefined} nav スライドメニュー
 */
export default function openNav() {
  // 展開用のスタイルを付与
  navButton.toggleClass('open');
  nav.toggleClass('open');

  if (!flag) {
    // メニュー展開時はスクロールを禁止
    $(window).on('touchmove.noScroll', function(e) {
      e.preventDefault();
    });
    flag = true;
  }
  else {
    // メニューを閉じたらスクロールイベントを付与
    $(window).off('.noScroll');
    flag = false;
  }
}

// =============================================================