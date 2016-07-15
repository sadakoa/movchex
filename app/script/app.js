// ライブラリ
import $ from 'jquery';
import Vue from 'vue';
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
  },
});
