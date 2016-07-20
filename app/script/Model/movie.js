// =============================================================
// movie.js - The Movie DBのAPIに関係する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import theMovieDb from 'themoviedb-javascript-library';
import * as render from '../View/render';
// =============================================================

// グローバル変数 ================================================
let worksData; // JSON(オブジェクト)を格納する変数
// =============================================================

/**
 * showPopularMovies - 人気映画をAPIから取得、データを返す関数
 */
export function getPopularMovies() {
  theMovieDb.discover.getMovies({}, successCB, errorCB);
  function successCB(data) {
    console.log(JSON.parse(data));
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}

// =============================================================

/**
 * searchKeywordMovies - キーワードがタイトルに関係する映画を取得する関数
 */
export function getKeywordMovies(aKeyword) {
  theMovieDb.search.getMovie({"query": aKeyword}, successCB, errorCB);
  function successCB(data) {
    worksData = JSON.parse(data).results;
    if (worksData.length == 0) {
      render.notExistMovies();
    } else {
      render.showResultMovies(worksData, aKeyword);
    }
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}

// =============================================================


/**
 * getIdMovies - idに紐づく映画情報をAPIから取得する関数
 *
 * @param  {type} aId 映画作品のID名
 */
export function getIdMovie(aId) {
  theMovieDb.movies.getById({"id": aId}, successCB, errorCB)
  function successCB(data) {
    console.log(JSON.parse(data));
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}
