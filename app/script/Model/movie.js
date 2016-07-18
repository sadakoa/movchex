// =============================================================
// movie.js - The Movie DBのAPIに関係する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import theMovieDb from 'themoviedb-javascript-library'; // The Movie DBのREST API
// =============================================================

/**
 * showPopularMovies - 人気映画をAPIから取得、データを返す関数
 */
export function showPopularMovies() {
  theMovieDb.discover.getMovies({}, successCB, errorCB);
  function successCB(data) {
    console.log('Success Callback');
    const parseData = JSON.parse(data);
    console.log(parseData);
  }
  function errorCB(data) {
    console.log('Error Callback');
  }
}
