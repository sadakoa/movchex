// ライブラリ
import $ from 'jquery';
import Vue from 'vue';
import * as load from './load';

// イベントの初期化
window.onload = () => {
  load.setEvent();
};

// ルーティング
new Vue({
  el: '#app',
  methods: {
    inbox: function () {
      window.location.href = 'index.html';
    },
    search: function () {
      window.location.href = 'search.html';
    },
  },
});
