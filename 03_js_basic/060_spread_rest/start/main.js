const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
console.log(result);

// スプレット演算子。配列の要素を一つずつ展開して引数に渡す
const result2 = Math.max(...nums);



let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, 10, ...arr2];
let newArr1 = arr1;
console.log(newArr1, newArr, arr1);

// オブジェクト
const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = 'John';

console.log(newObj);
console.log(obj);


// レストパラメータ・残余引数
// 引数を配列にして、関数内で配列の変数として扱える
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)


const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
