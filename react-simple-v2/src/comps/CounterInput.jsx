import React from "react";

function CounterInput({ setNumber }) {
  const onChangeHandler = (e) => {
    const number = e.target.value;
    console.log(number);
    setNumber(number);
  };
  return (
    <div>
      <input placeholder="숫자입력" onChange={onChangeHandler}></input>
    </div>
  );
}

export default CounterInput;
