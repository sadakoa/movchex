// =============================================================
// searchResult.js - APIから返されたデータを受取りDOMに反映させる処理を行う
// =============================================================

let array = [];

export function showResultMovies(aData) {
  const worksData = aData.results;
  console.log(worksData);
  vm.$set('works', worksData);
}
export const vm = new Vue({
  el: '.p-search-result',
  data: {
    works: array,
  },
});
