// =============================================================
// sendKeyword.js - 検索ページでユーザーの入力を受け取る処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as movie from '../Model/movie';
// =============================================================

export default function sendKeyword() {
  new Vue({
    el: '#search-form',
    data: {
      keyword: '',
    },
    methods: {
      sendKeyword: function() {
        let text = this.keyword.trim();
        movie.searchKeywordMovies(text);
      },
    },
  });
}
