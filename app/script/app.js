// ライブラリ
import * as load from './load';

// イベントの初期化
window.onload = () => {
  load.setEvent();
};

// ルーティング
let routes = new Vue({
  el: '#app',
  methods: {
    inbox: () => {
      window.location.href = 'index.html';
    },
    search: () => {
      window.location.href = 'search.html';
    },
    work: () => {
      window.location.href = 'work.html';
    },
    backHistory: () => {
      javascript:window.history.back(-1);
      return false;
    },
  },
});
