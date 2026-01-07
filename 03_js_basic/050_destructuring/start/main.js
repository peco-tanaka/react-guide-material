const arry = ["配列1", "配列2", "配列3"];
console.log(arry[0]);
console.log(arry[2]);

// 配列を分割代入。順番が大事
const [ a, b, c] = ["配列1", "配列2", "配列3"];
console.log(a);
console.log(c);


const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(obj.x);
console.log(obj.y);

// オブジェクトの分割代入。プロパティが大事
const { z, x } = { x: "オブジェクト1", z: "オブジェクト2"}
console.log(z);
console.log(x);


const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// 関数の引数の配列を分割代入
const fnArr = ([ country, state, city ]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// 関数の引数のオブジェクトを分割代入
const fnObj = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
