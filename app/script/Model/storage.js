// =============================================================
// storage.js - ブラウザストレージを操作する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import store from 'store';
// =============================================================

/**
 * setStorage - ストレージにデータを登録する
 *
 * @return {type}  description
 */
export function setStorage(aData) {
  store.set('inbox', aData);
}

// =============================================================


/**
 * getStorage - ストレージからデータを取得する
 *
 * @return {type}  description
 */
export function getStorage() {
}

// =============================================================


/**
 * removeStorage - ストレージからデータを削除する
 *
 * @return {type}  description
 */
export function removeStorage() {
}
