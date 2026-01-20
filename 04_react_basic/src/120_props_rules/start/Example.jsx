// POINT propsの流れは一方通行
// 親から子に流れる。子から親には流れない
// POINT propsは読み取り専用

import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  
  const name ="Tom";

  return (
    <>
      <Hello name={name}/>
      <Bye name={name}/>
    </>
  );
};

export default Example;
