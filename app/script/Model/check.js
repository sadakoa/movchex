// =============================================================
// check.js - 確認 & 検索 & 解析に関する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as storage from '../Model/storage';
import * as render from '../View/render';
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
  // データが無い場合の処理
  if (storageData == '' || storageData == null) {
    console.log('データ無し');
    let text = '<img src="images/icon/popcorn.svg" alt="ポップコーン" class="p-empty-message__image"><p class="p-empty-message__text">これから観る予定の映画を<br>チェックしよう:)</p>';
    render.inboxLists.$set('text', text);
  }
  // データがある場合の処理
  else {
    console.log('データ有り');
    render.inboxLists.$set('works', storageData);
  }
}

// =============================================================

/**
 * showStorageNum - INBOXのリストアイテムの個数を表示する関数
 */
export function showStorageNum() {
  let storageData =  storage.getStorage();
  if (storageData == '' || storageData == null) {
    return;
  }
  else {
    const num = storageData.length;
    const inboxNumber = $('<p class="p-inbox-number"></p>').text(num);
    $('.p-header-logo').append(inboxNumber);
  }
}
