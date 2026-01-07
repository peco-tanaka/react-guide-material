// ========== 元の配列 ==========
const arry = [10, 20, 30, 40];


// ========== 従来の方法：for文で処理 ==========
const newArry = [];

for(let i = 0; i < arry.length; i++) {
  const val = arry[i] * 2; // 各要素を2倍にする
  if(val > 50) {            // 50より大きい値だけ
    newArry.push(arry[i] * 2) // 新しい配列に追加
  }
}
console.log(newArry); // [60, 80]


// ========== 配列メソッドを使った方法（分割版） ==========

// map: 各要素を変換して新しい配列を作る
// [10, 20, 30, 40] → [20, 40, 60, 80]
const newArry2 = arry.map(val => val * 2)

// filter: 条件に合う要素だけを残す
// [20, 40, 60, 80] → [60, 80]
const newArry3 = newArry2.filter(val => val > 50)
console.log(newArry3); // [60, 80]


// ========== メソッドチェーン（推奨） ==========

// mapとfilterを繋げて書く（Reactでよく使うパターン）
const newArry4 = arry.map(val => val * 2).filter(val => val > 50)
console.log(newArry4); // [60, 80]