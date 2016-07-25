// =============================================================
// setEvent.js - イベントリスナーを初期化、格納する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import openNav from '../View/navigation'; // ナビゲーションに関係する処理を行う
// =============================================================

// グローバル変数 ================================================
const nav = $('#header-nav'); // スライドナビ
const navButton = $('#nav-button'); // ハンバーガーボタン
// デバイスに応じてタッチイベントを判定する処理
const TOUCH = ('ontouchstart' in document) ? 'touchstart' : 'click';
// =============================================================

/**
 * SetEvent - イベントリスナーを初期化する関数
 */
export default function setEvent() {
  navButton.on(TOUCH, function(e) {
    e.stopPropagation();
    openNav();
  });

  // イベントの伝搬を止める
  nav.on(TOUCH, function(e) {
    e.stopPropagation();
  });

  // ナビゲーション以外を閉じても閉じるようにする
  $(document).on(TOUCH, '.app-open', function(e) {
    e.preventDefault();
    openNav();
  });
}

// =============================================================
