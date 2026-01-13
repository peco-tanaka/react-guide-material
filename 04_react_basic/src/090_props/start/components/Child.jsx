/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// オブジェクトなので分割代入できる
const Child = ({ color: c = 'green', num = 123, fn = (arg) => arg, bool = false, obj = { name: 'Momo', age: 10 }}) => {

  // 呼び出し元のpropsで渡された値の中身を確認
  // console.log(props)
  console.log(num)

  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
      <h3>{num}</h3>
      <h3>{fn('Props')}</h3>
      <h3>{ bool ? 'true' : 'false' }</h3>
      <h3>{ obj.name + obj.age }</h3>
    </div>
  );
};

export default Child;
