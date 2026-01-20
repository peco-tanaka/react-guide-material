const Bye = (props) => {

  // propsは読み取り専用のオブジェクトなので変更できない
  props.name = "Bob";

  return (
    <div>
      <h3>Bye {props.name}</h3>
    </div>
  );
};

export default Bye;