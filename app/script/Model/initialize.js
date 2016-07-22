// =============================================================
// initialize.js - HTMLが読み込まれた後に初期化する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import setEvent from '../Controller/setEvent';
import * as send from '../Controller/send';
import * as render from '../View/render';
import * as check from '../Model/check';
// =============================================================

/**
 * initialize - 初回読み込み時に各種要素を初期化・設定する関数
 */
export default function initialize() {
  setEvent(); // イベントリスナーを初期化
  send.inputKeyword; // 検索画面でのユーザー入力に関するVueインスタンス
  render.inboxLists; // INBOXページの情報をレンダリングするVueインスタンス
  render.resultMovies; // 検索結果をレンダリングするVueインスタンス
  render.detailMovie;  // 作品情報をレンダリングするVueインスタンス
  check.showStorageNum();
}

// =============================================================
