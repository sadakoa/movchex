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
    * convert.js - 受け取った情報を変換する処理を行う
    * storage.js - ブラウザストレージに関する処理を行う
    * check.js - 検索 & 解析に関する処理を行う
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
 */

// 利用モジュール & パッケージ =====================================
import initialize from './Model/initialize';
import * as route from './Controller/route';
// =============================================================

// HTMLが読み込まれた後に実行する
window.onload = () => {
  initialize(); // 初期化処理
  route.setRoutes;      // ルーティング
  route.urlDispatcher(); // URL別で関数を実行する
  route.urlRedirect(); // 特定ページのリダイレクト処理
};

// =============================================================
