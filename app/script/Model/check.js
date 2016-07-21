// =============================================================
// check.js - 検索 & 解析に関する処理を行う
// =============================================================

/**
 * seekIdMovies - ストレージデータにアクセス先の作品idがあるかチェックする
 */
export function seekIdMovies(aId, aData) {
  let storageIdData;
  for (let i=0; i < aData.length; i++) {
    storageIdData = aData[i].id;
    if (storageIdData === aId) {
      console.info(`${storageIdData}が一致したのでボタンのステータスを変更する`);
    }
  }
}
