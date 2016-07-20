// =============================================================
// app.js - 複数のファイルを一つにして出力する処理を行う
// =============================================================

// ====== MOVCHEX ドキュメント ===================================

/**
  * app.js  - 複数のファイルを一つにして出力する処理を行う
  ---------------------------------------------------------
  * Model - 処理の中枢(ビジネスロジック)を担う要素
    * initialize.js - HTMLが読み込まれた後に初期化する処理を行う
    * movie.js - The Movie DBのAPIに関係する処理を行う
    * convert.js - 取得した
  ---------------------------------------------------------
 `` * View  - 表示・出力に関係する処理を担う要素
    * navigation.js - スライドメニュ-の開閉処理を行う
    * adaptiveBackground.js - 作品詳細のドミナントカラーに関する処理を行う
    * render.js - APIから返されたデータを元にDOMに反映させる処理を行う
  ---------------------------------------------------------
  * Controller - ViewとModelの処理に応じて全体を制御する要素
    * route.js - ルーティングに関する処理を行う
    * setEvent.js - イベントリスナーを初期化、格納する処理を行う
    * send.js - ユーザーの入力を受け取る処理を行う
  ---------------------------------------------------------
  * Use Module & Libraly - 依存モジュール&ライブラリ
    * jQuery - javascript ライブラリ (DOMスクレイピング的API)
    * vue.js - Webインターフェイス向けリアクティブコンポーネント
    * adaptiveBackground.js - 画像のドミナントカラーを取得するプラグイン(jQuery依存)
    * url-dispatcher.js - URLディスパッチャー
    * store.js - LocalStorageを操作するライブラリ
    * themoviedb-javascript-library - The Movie DBのREST API
  ---------------------------------------------------------
 */

// 利用モジュール & パッケージ =====================================
import initialize from './Model/initialize';
import * as route from './Controller/route';
// =============================================================

// HTMLが読み込まれた後に実行する
window.onload = () => {
  initialize(); // 初期化処理
  route.setRoutes;      // ルーティング
  route.dispatcher.run(location.href); // URLディスパッチャー
};

// =============================================================

// import * as movie from './Model/movie';
// movie.getIdMovies();
