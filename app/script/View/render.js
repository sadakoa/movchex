// =============================================================
// render.js - APIから返されたデータを受取りDOMに反映させる処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as convert from '../Model/convert';
// =============================================================

// グローバル変数 ================================================
let array = []; // 初期化用の配列
// =============================================================

/**
 * 検索結果をレンダリングするVueインスタンス
 */
export const resultMovies = new Vue({
  el: '.p-search-result',
  data: {
    works: array,
    keyword: '',
  },
});

// =============================================================

/**
 * showResultMovies - APIからデータを受取りVue関数に配列として渡す関数
 *
 * @param  {JSON} aData JSONデータ
 * @param  {String} aKeyword 検索キーワード
 * @param  {Array} worksData JSON内の配列
 */
export function showResultMovies(aData, aKeyword) {
  let releaseDate; // リリース情報を格納する変数
  let sliceDate; // リリース情報を切り出した文字を格納する変数

  for(let i=0; i < aData.length; i++) {
    // release_dateキーのvalueを書き換え
    releaseDate = aData[i].release_date;
    sliceDate = convert.sliceReleaseDate(releaseDate);
    aData[i].release_date = sliceDate;
  }

  // resultMoviesのdata -> worksにJSONをセット
  resultMovies.$set('works', aData);
  // resultMoviesのdata -> keywordに検索キーワードをセット
  resultMovies.$set('keyword', '【' + aKeyword + '】の検索結果');
}

// =============================================================

/**
 * showResultMovies - APIから受け取ったデータが空の場合に実行される関数
 */
export function notExistMovies() {
  // resultMoviesのdata -> worksに空文字列をセット
  resultMovies.$set('works', '');
  // resultMoviesのdata -> keywordに検索キーワードをセット
  resultMovies.$set('keyword', '一致する映画は見つかりませんでした');
}
