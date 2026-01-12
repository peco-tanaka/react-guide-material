import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>

  console.log(jsx)

  return (
    // {} の中にJSの 式 を埋め込める。メソッドも実行できる
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      {/* 配列を渡すと中身が展開される */}
      <h3>{arry}</h3>
      <h3>{hello("Hello")}</h3>
      <h3>{/* 画面上に表示されません */}</h3>
      {/* JSXもJSの 式 なので{}で囲うことができる */}
      {jsx}
    </div>
  )
}

export default Expression;