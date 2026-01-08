// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
// console.log(result);

const falsy = 0;
const truthy = 1;
// console.log(Boolean(truthy));
// console.log(Boolean(falsy));

// 論理積 (&&) について
// 左から順番にfalsyな値を見つけた時点で、その値を格納する
// falthyな値が見つからなかったときは、一番右の値を格納する
const resultA = "" && "foo";
const resultB = 2 && 1 && 0 && 3;
const resultC = "foo" && 4;

console.log(resultA);
console.log(resultB);
console.log(resultC);

// 理論和 (||) について
// 左から順番にtruthyな値を見つけた時点で、その値を格納する
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

console.log(resultD);
console.log(resultE);
console.log(resultF);
