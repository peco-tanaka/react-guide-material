// ========================================
// export - 他のファイルから使えるようにする
// ========================================

// 【名前付きエクスポート】
// - 定義と同時にエクスポート
// - 複数エクスポート可能
// - インポート時は {} で囲み、同じ名前を使う
// 使い方: import { hello } from './module.js'
export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

// 【デフォルトエクスポート】
// - 1ファイルにつき1つだけ
// - インポート時は {} なしで、任意の名前をつけられる
// 使い方: import funcB from './module.js'
//        import 好きな名前 from './module.js'
export default funcB;

// クラスの定義
class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name);
  };
}

// 【後からまとめてエクスポート】
// - 先に定義してから、後でエクスポート
// - 複数をまとめて書ける: export { User, 他の変数, ... }
// 使い方: import { User } from './module.js'
export { User }
