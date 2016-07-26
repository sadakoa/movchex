// =============================================================
// navigation.js - スライドメニュ-の開閉処理を行う
// =============================================================

// グローバル変数 ================================================
const navButton = $('#nav-button');
const nav = $('#header-nav');
const app = $('#app');
const main = $('.l-main');
let flag = false;
let openBg = $('<div class="open-bg"></div>');
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
    // 背景を生成
    app.addClass('app-open');
    main.addClass('main-open');

    flag = true;
  }
  else {
    // メニューを閉じたらスクロールイベントを付与
    $(window).off('.noScroll');
    // 背景を削除
    app.removeClass('app-open');
    main.removeClass('main-open');
    flag = false;
  }
}

// =============================================================
