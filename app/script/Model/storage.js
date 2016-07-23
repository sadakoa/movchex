// =============================================================
// storage.js - ブラウザストレージを操作する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import store from 'store';
// =============================================================

/**
 * setStorage - ストレージにINBOX内のデータを登録する
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
  let inboxData = store.get('inbox');
  return inboxData;
}

// =============================================================

/**
 * setHistoryStorage - ストレージに視聴履歴のデータを保存する
 *
 */
export function setHistoryStorage(aData) {
  store.set('history', aData);
}

// =============================================================


/**
 * getHistoryStorage - ストレージから視聴履歴データを取得する
 */
export function getHistoryStorage() {
  let HistoryData = store.get('history');
  return HistoryData;
}

// =============================================================

/**
 * removeHistoryStorage - ストレージから視聴履歴データを削除
 */
export function removeHistoryStorage() {
  let HistoryData = store.remove('history');
}
