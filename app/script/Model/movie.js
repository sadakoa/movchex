// =============================================================
// movie.js - The Movie DBのAPIに関係する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import theMovieDb from 'themoviedb-javascript-library'; // The Movie DBのREST API
import * as render from '../View/renderResult';
// =============================================================

/**
 * showPopularMovies - 人気映画をAPIから取得、データを返す関数
 */
export function getPopularMovies() {
  theMovieDb.discover.getMovies({}, successCB, errorCB);
  function successCB(data) {
    console.log('Success Callback');
    console.log(JSON.parse(data));
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}

/**
 * searchKeywordMovies - キーワードがタイトルに関係する映画を取得する関数
 */
export function getKeywordMovies(aKeyword) {
  theMovieDb.search.getMovie({"query": aKeyword}, successCB, errorCB);
  function successCB(data) {
    console.log('Success Callback');
    render.showResultMovies(JSON.parse(data));
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}
