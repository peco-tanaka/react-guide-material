// ========== DOM要素の取得と操作 ==========

// HTML内の最初のh1要素を取得
const h1Element = document.querySelector('h1');
console.log(h1Element); // h1要素全体が表示される

// h1要素のテキスト内容を取得
console.log(h1Element.textContent);

// h1要素のテキストを変更
h1Element.textContent = '変更後のタイトル'
console.log(h1Element.textContent); // 変更後のテキストが表示される


// ========== イベントリスナーの登録 ==========

// button要素を取得
const btnEl = document.querySelector('button');

// 方法1: 無名関数（アロー関数）を直接渡す
btnEl.addEventListener('click', (e) => {
  // e = イベントオブジェクト（クリック情報が入っている）
  // e.target = クリックされた要素（この場合はbutton）
  console.log(e.target.textContent); // ボタンのテキストを表示
  console.log("hello");
});

// 方法2: 関数を変数に入れてから渡す（再利用可能）
const helloFnc = (e) => {
  console.log(e.target.textContent); // ボタンのテキストを表示
  console.log("hello");
}

// 関数名を渡す（helloFnc()ではない！）
// これがコールバック関数の使い方
btnEl.addEventListener('click', helloFnc);