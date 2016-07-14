// =============================================================
// nav.js - ナビゲーションに関係する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import $ from 'jquery';
// =============================================================

// グローバル変数 ================================================
const navButton = $('#nav-button');
const nav = $('#header-nav');
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
  $(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
  });
}
