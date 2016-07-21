// =============================================================
// check.js - 確認 & 検索 & 解析に関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as storage from '../Model/storage';
// =============================================================

/**
 * seekIdMovies - ストレージデータにアクセス先の作品idがあるかチェックする
 */
export function seekIdMovies(aId, aData) {
  let storageIdData;
  for (let i=0; i < aData.length; i++) {
    storageIdData = aData[i].id;
    if (storageIdData === aId) {
      $('.p-push__button').addClass('is-addPush').text('追加済み');
    }
  }
}

// =============================================================

export function hasStorageData() {
  let storageData =  storage.getStorage();
  if (storageData == null) {
    console.log('データ無し');
  } else {
    console.log('データ有り');
  }
}
