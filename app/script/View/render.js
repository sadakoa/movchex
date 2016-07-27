// =============================================================
// render.js - APIから返されたデータを受取りDOMに反映させる処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import * as convert from '../Model/convert';
import * as storage from '../Model/storage';
import moment from 'moment';
// =============================================================

// グローバル変数 ================================================
let array = []; // 初期化用の配列
let genreArray = []; // ジャンル用の配列
let genreLength; // ジャンル用の配列個数
let releaseDate; // リリース情報を格納する変数
let sliceDate; // リリース情報を切り出した文字を格納する変数
let historyData; // チェックされたリスト要素を格納する変数
let checkDate; // INBOXからチェックした時間
let inboxArray = storage.getStorage(); // ストレージデータの配列
let historyArray = storage.getHistoryStorage(); // 視聴履歴データの取得
const searchWrapper = $('.p-search-wrapper'); // 検索ボタン
const searchInput = $('.p-search-wrapper__input'); // 検索ボタンの入力欄
// =============================================================

// もしストレージデータがない場合は初期化をする
if (inboxArray == null) {
  inboxArray = [];
}

if (historyArray == null) {
  historyArray = [];
}

// =============================================================

/**
 * INBOXページの情報をレンダリングするVueインスタンス
 */
export const inboxLists = new Vue({
  el: '#inbox-main',
  data: {
    text: '',
    works: '',
    url: 'work.html',
    keyword: '',
  },
  methods: {
    openSearchNav: function() {
        searchWrapper.toggleClass('focused');
        searchInput.focus();
    },
    jumpSearch: function() {
      if (this.keyword === '') { alert('検索キーワードを入力してください');return;}
      let keyword = this.keyword.trim();
      window.location.href = 'search.html?' + keyword;
    },
    removeItem: function(index) {
      // aリンクのイベントを停止
      event.preventDefault();

      // 視聴履歴のデータオブジェクトを生成
      checkDate = moment().format('YYYY.MM.DD');
      historyData = {
        id: this.works[index].id,
        title: this.works[index].original_title,
        image: this.works[index].poster_path,
        date: checkDate,
       };
      historyArray.unshift(historyData);
      storage.setHistoryStorage(historyArray);

      // 配列から要素を削除
      this.works.splice(index, 1);
      // INBOXのストレージを更新する
      inboxArray = inboxLists.$get('works');
      storage.setStorage(inboxArray);

      // INBOXリストの個数を送信
      inboxNumber.$set('num', inboxArray.length);
    },
  },
});

// INBOXリストの個数
export const inboxNumber = new Vue({
  el: '.p-header-logo',
  data: {
    num: '',
  },
});

// =============================================================

/**
 * 検索結果をレンダリングするVueインスタンス
 */
export const resultMovies = new Vue({
  el: '.p-search-result',
  data: {
    works: array,
    keyword: '',
    url: 'work.html',
  },
});

// =============================================================

/**
 * showResultMovies - APIからデータを受取りVue関数に配列として渡す関数
 *
 * @param  {JSON} aData JSONデータ
 * @param  {String} aKeyword 検索キーワード
 * @param  {Array} worksData JSON内の配列
 */
export function showResultMovies(aData, aKeyword) {
  // release_dateキーのvalueを配列の数だけ更新する
  for (let i = 0; i < aData.length; i++) {
    releaseDate = aData[i].release_date;
    sliceDate = convert.sliceReleaseDate(releaseDate);
    aData[i].release_date = sliceDate;
  }

  // resultMoviesのdata -> worksにJSONをセット
  resultMovies.$set('works', aData);
  // resultMoviesのdata -> keywordに検索キーワードをセット
  resultMovies.$set('keyword', '【' + aKeyword + '】の検索結果');
}

// =============================================================

/**
 * showResultMovies - APIから受け取ったデータが空の場合に実行される関数
 */
export function notExistMovies() {
  // resultMoviesのdata -> worksに空文字列をセット
  resultMovies.$set('works', '');
  // resultMoviesのdata -> keywordに検索キーワードをセット
  resultMovies.$set('keyword', '一致する映画は見つかりませんでした');
}

// =============================================================

/**
 * 作品の詳細情報をレンダリングするVueインスタンス
 */
export const detailMovie = new Vue({
  el: '#work-main',
  data: {
    work: {
      original_title: null,
      poster_path: null,
      backdrop_path: null,
    },
    popularWorks: '',
    url: 'work.html',
    buttonText: 'INBOXに追加する',
    addedText: '',
    youtubeUrl: 'http://www.youtube.com/watch',
    trailerPair: '',
  },
  methods: {
    addInbox: function() {

      // INBOXに追加後なら下記の処理を実行
      if ($('.p-push__button').hasClass('is-addPush')) {
        window.location.href = 'index.html';
        return;
      }
      // INBOXに追加前なら下記の処理を実行
      else {
        // INBOXに追加する処理
        let data = this.work;
        // 視聴ステータスを追加 true - inboxに追加してある / false - 追加していない
        data['pushStatus'] = true;
        // 配列に追加
        inboxArray.unshift(data);
        // ブラウザストレージに登録
        storage.setStorage(inboxArray);

        // テキスト文言とスタイルを変更
        this.$els.pushButton.textContent = this.addedText;
        this.$els.pushButton.classList.add('is-addPush', 'push-anime');
        // 後でPromiseで書き換える -------------------------------
        setTimeout(function() {
          $('.p-push__button').removeClass('push-anime');
          setTimeout(function() {
            $('.p-push__button').addClass('validate');
            setTimeout(function() {
              $('.p-push__button').removeClass('validate');
              setTimeout(function() {
                $('.p-push__button').text('INBOXを表示する');
              },200);
            }, 1000);
          }, 200);
        }, 1200);
        // 後でPromiseで書き換える -------------------------------
      }
    },
    jumpSearch: function() {
      if (this.keyword === '') { alert('検索キーワードを入力してください');return;}
      let keyword = this.keyword.trim();
      window.location.href = 'search.html?' + keyword;
    },
  },
});

// =============================================================

/**
 * showDetailMovie - APIからデータを受取りVue関数にオブジェクトを渡す関数
 *
 * @param  {JSON} aData JSONデータ
 */
export function showDetailMovie(aData) {
  $("title").text(`${aData.original_title} | MOVCHEX`);
  // リリース情報を(20XX)にするように変換
  releaseDate = aData.release_date;
  sliceDate = convert.sliceReleaseDate(releaseDate);
  aData.release_date = sliceDate;

  // ジャンル名を文字列にしてオブジェクトのkeyを書き換える
  genreLength = aData.genres.length;
  for(let i = 0; i < genreLength; i++) {
    let x = aData.genres[i].name;
    genreArray.push(x);
  }
  aData.genres = genreArray;

  // detailMovieのdata -> worksにJSONをセット
  detailMovie.$set('work', aData);

  /**
   * 関数実行を瞬間的に遅らせているためVueインスタンスに
   * 画像srcがセットされてから実行される
   */
  setTimeout(convert.changeBackground, 1);
}

// =============================================================

/**
 * showRandomPopularMovies - 人気映画を上位3件のみ出力する関数
 *
 * @param  {type} aData JSONデータ
 */
export function showRandomPopularMovies(aData) {
  let randomPopularArray = [];
  // ページの上位3件のみ取得する
  for(let i=0; i < 6; i++) {
    randomPopularArray.push(aData[i]);
  }
  // detailMovieのdata -> popularWorksにJSONをセット
  detailMovie.$set('popularWorks', randomPopularArray);
}

// =============================================================

/**
 * showTrailerMovies - YoutubeのトレイラーのURLを出力する関数
 */
export function showTrailerMovies(aData) {
  detailMovie.$set('trailerPair', aData);
}

// =============================================================

/**
 * 人気映画をレンダリングするVueインスタンス
 */
 export const popularMovies = new Vue({
   el: '#popular-main',
   data: {
     works: '',
     url: 'work.html',
     prevLink: 'popular.html',
     nextLink: 'popular.html',
   },
   methods: {
     showPrev: function(e) {
       let urlPair = Number(location.search.substring(1).split('&'));
      //  もしページ番号が1かパラメータが0だったらaリンクを止める
       if (urlPair == 0 || urlPair == 1) {
         e.preventDefault();
         return;
       }
       let y = urlPair - 1;
       popularMovies.$set('prevLink', 'popular.html' + '?' + y);
     },
     showNext: function() {
      let urlPair = Number(location.search.substring(1).split('&'));
      // もしパラメータが無かったらボタンを押した時にpage2から表示
      if (urlPair == 0) {
        urlPair = urlPair + 1;
      }
      let x = urlPair + 1;
      popularMovies.$set('nextLink', 'popular.html' + '?' + x);
     }
   }
 });

// =============================================================


/**
 * showPopularMovies - 人気映画を出力する関数
 */
export function showPopularMovies(aData) {
  popularMovies.$set('works', aData);
}

// =============================================================

/**
 * 視聴履歴をレンダリングするVueインスタンス
 */
export const historyMovies = new Vue({
  el: '.p-history-movie',
  data: {
    works: '',
    url: 'work.html',
  },
  methods: {
    removeHistoryData: function() {
      storage.removeHistoryStorage();
      historyMovies.$set('works', '');
    },
  },
});

// =============================================================

/**
 * showHistoryMovies - 視聴履歴の映画データを出力する関数
 */
export function showHistoryMovies(aData) {
  historyMovies.$set('works', aData);
}

// =============================================================
