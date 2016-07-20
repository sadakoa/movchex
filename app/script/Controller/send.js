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
      // inputがからの場合は処理を終了する
      if (this.keyword === '') { alert('検索キーワードを入力してください');return; }
      let keyword = this.keyword.trim();
      movie.getKeywordMovies(keyword);
    },
  },
});
