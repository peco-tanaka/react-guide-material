// 関数式
function fn(number) {
  return number * 2;
}

console.log(fn(2));

// 無名関数
const fn = function(number) {
  return number * 2;
}

// アロー関数
const fnArrow = (number) => {
  return number * 2;
}

// 引数が一つの場合、()を省略できる。1行の場合、returnは省略できる
const fnArrow2 = number => {
  return number * 2;
}

// オブジェクトを返すときは()で囲う
const fnArrowObj = number => ({ result: number * 2 });


console.log(fnArrow(2));
