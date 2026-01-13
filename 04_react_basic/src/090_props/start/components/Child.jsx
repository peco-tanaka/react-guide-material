/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// オブジェクトなので分割代入できる
const Child = ({ color: c = 'green' }) => {

  // 呼び出し元のpropsで渡された値の中身を確認
  // console.log(props)

  return (
    <div className={`component ${c}`}>
      <h3>Hello Component</h3>
    </div>
  );
};

export default Child;
