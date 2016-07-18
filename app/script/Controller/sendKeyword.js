// =============================================================
// sendKeyword.js - 検索ページからユーザーの入力を受け取る処理を行う
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
        console.log(text);
      },
    },
  });
}
