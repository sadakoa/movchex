// =============================================================
// searchResult.js - APIから返されたデータを受取りDOMに反映させる処理を行う
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
  },
});

/**
 * showResultMovies - APIからデータを受取りVue関数に配列として渡す関数
 *
 * @param  {JSON} aData JSONデータ
 * @param  {Array} worksData JSON内の配列
 */
export function showResultMovies(aData) {
  const worksData = aData.results;
  console.log(worksData);
  // resultMoviesの配列にJSONをセット
  resultMovies.$set('works', worksData);
}
