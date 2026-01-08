// 非同期処理（Promise）
let a = 0;
console.log(a);

// a = 1　のコールバック関数は、2000ms経過後に実行される
// よって、aは0と表示される
setTimeout(() => {
  a = 1;
}, 2000);

console.log(a);

new Promise((resolve, reject) => {
    setTimeout(() => {
      a = 1;
      resolve()
    }, 2000);
}).then(() => {
  console.log(a);
})
