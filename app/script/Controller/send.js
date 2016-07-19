// =============================================================
// send.js - ユーザーの入力を受け取る処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as movie from '../Model/movie';
// =============================================================

/**
 * inputKeyword - フォームに入力された値をAPIを叩く関数に渡す
 */
export const inputKeyword =  new Vue({
  el: '#search-form',
  data: {
    keyword: '',
  },
  methods: {
    sendKeyword: function() {
      let keyword = this.keyword.trim();
      movie.getKeywordMovies(keyword);
    },
  },
});