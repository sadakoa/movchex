// =============================================================
// movie.js - The Movie DBのAPIに関係する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import theMovieDb from 'themoviedb-javascript-library';
import * as render from '../View/render';
// =============================================================

// グローバル変数 ================================================
let worksData; // 映画情報のJSON(配列)を格納する変数
let detailData; // 映画の作品情報のJSON(オブジェクト)を格納する変数
let popularData; // 人気作品の映画
// =============================================================

/**
 * getPopularMovies - 人気映画をAPIから取得、データを返す関数
 */
export function getPopularMovies(pageId) {
  theMovieDb.discover.getMovies({page: pageId}, successCB, errorCB);
  function successCB(data) {
    popularData = JSON.parse(data).results;
    render.showPopularMovies(popularData);
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}

// =============================================================

/**
 * getRandomPopularMovies - 人気映画をAPIから取得、データを返す関数
 */
export function getRandomPopularMovies(pageId) {
  theMovieDb.discover.getMovies({page: pageId}, successCB, errorCB);
  function successCB(data) {
    popularData = JSON.parse(data).results;
    render.showRandomPopularMovies(popularData);
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
    detailData = JSON.parse(data);
    render.showDetailMovie(detailData);
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}
