// =============================================================
// convert.js : 受け取った情報を変換する処理を行う
// =============================================================

// 利用モジュール & パッケージ =====================================
import adaptiveBackground from '../View/adaptiveBackground';
// =============================================================

// グローバル変数 ================================================
let nameArray; // id名から文字に変換したジャンルを格納する配列
// =============================================================

// ジャンルのidに対応する名前定数
export const MOVIE_GENRE = {
  28    : 'Action',
  12    : 'Adventure',
  16    : 'Animation',
  35    : 'Comedy',
  80    : 'Crime',
  99    : 'Documentary',
  18    : 'Drama',
  10751 : 'Family',
  14    : 'Fantasy',
  10769 : 'Foreign',
  36    : 'History',
  27    : 'Horror',
  10402 : 'Music',
  9648  : 'Mystery',
  10749 : 'Romance',
  878   : 'Science Fiction',
  10770 : 'TV Movie',
  53    : 'Thriller',
  10752 : 'War',
  37    : 'Western',
};

// 人気映画を検索するページ範囲
const MAX = 150;
const MIN = 1;

// =============================================================

/**
 * renameGenre - ジャンルのidを元に文字列の配列に変換する関数
 *
 * @param  {array} aArray ジャンルidの数値の配列
 */
export function renameGenre(aArray) {
  nameArray = [];
  for(let i =0; i < aArray.length; i++) {
    nameArray.push(MOVIE_GENRE[aArray[i]]);
  }
  return nameArray;
}

// =============================================================

/**
 * sliceReleaseDate - リリース情報を (20XX)形式に変換する関数
 *
 * @param  {String} aDate リリース情報
 */
export function sliceReleaseDate(aDate) {
  const result = aDate.slice(0, 4);
  return result;
}

// =============================================================

/**
 * changeBackground - ドミナントカラーを取得して指定した領域の背景色を変更する関数
 */
export function changeBackground() {
  // adaptive-backgrounds.jsのオプション
  const adaptive_params = {
    selector: '.p-movie-info__image',
    parent: '#work-main',
    normalizeTextColor: true,
    normalizedTextColors: { dark: '#000', light: '#fff' },
    lumaClasses: { light: 'ab-light', dark: 'ab-dark' },
  };
  // adaptive-backgrounds.jsを実行
  $.adaptiveBackground.run(adaptive_params);
}

// =============================================================

export function showRandomNum() {
  const randomNum = Math.floor(( Math.random() * ( ( MAX + 1 ) - MIN ) ) + MIN);
  return randomNum;
}
