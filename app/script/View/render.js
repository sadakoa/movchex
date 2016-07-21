// =============================================================
// render.js - APIから返されたデータを受取りDOMに反映させる処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as convert from '../Model/convert';
// =============================================================

// グローバル変数 ================================================
let array = []; // 初期化用の配列
let genreArray = []; // ジャンル用の配列
let genreLength; // ジャンル用の配列個数
let releaseDate; // リリース情報を格納する変数
let sliceDate; // リリース情報を切り出した文字を格納する変数
// =============================================================

/**
 * 検索結果をレンダリングするVueインスタンス
 */
export const resultMovies = new Vue({
  el: '.p-search-result',
  data: {
    works: array,
    keyword: '',
    url: 'work.html',
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
  // release_dateキーのvalueを配列の数だけ更新する
  for (let i = 0; i < aData.length; i++) {
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

// =============================================================

/**
 * 作品の詳細情報をレンダリングするVueインスタンス
 */
export const detailMovie = new Vue({
  el: '.p-movie-detail',
  data: {
    work: {
      poster_path: null,
      backdrop_path: null,
    },
    popularWorks: '',
    url: 'work.html',
  },
});

// =============================================================

/**
 * showDetailMovie - APIからデータを受取りVue関数にオブジェクトを渡す関数
 *
 * @param  {JSON} aData JSONデータ
 */
export function showDetailMovie(aData) {
  // リリース情報を(20XX)にするように変換
  releaseDate = aData.release_date;
  sliceDate = convert.sliceReleaseDate(releaseDate);
  aData.release_date = sliceDate;

  // ジャンル名を文字列にしてオブジェクトのkeyを書き換える
  genreLength = aData.genres.length;
  for(let i = 0; i < genreLength; i++) {
    let x = aData.genres[i].name;
    genreArray.push(x);
  }
  aData.genres = genreArray;

  // detailMovieのdata -> worksにJSONをセット
  detailMovie.$set('work', aData);

  /**
   * 関数実行を瞬間的に遅らせているためVueインスタンスに
   * 画像srcがセットされてから実行される
   */
  setTimeout(convert.changeBackground, 1);
}

// =============================================================


/**
 * showRandomPopularMovies - 人気映画を上位3件のみ出力する関数
 *
 * @param  {type} aData JSONデータ
 */
export function showRandomPopularMovies(aData) {
  let randomPopularArray = [];
  // ページの上位3件のみ取得する
  for(let i=0; i < 3; i++) {
    randomPopularArray.push(aData[i]);
  }
  console.log(randomPopularArray);
  detailMovie.$set('popularWorks', randomPopularArray);
}
