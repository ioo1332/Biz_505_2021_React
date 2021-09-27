import React from "react";
import { useState } from "react";

function Counter() {
  const [number, setNum] = useState(0);
  const plus = () => {
    //count++ 사용불가
    setNum(number + 1);
  };
  const minus = () => {
    setNum(number - 1);
  };
  return (
    <div>
      <h1>카운트:{number}</h1>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </div>
  );
}

export default Counter;
