import React from "react";

function BuckInput(props) {
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = e.target.value;
      // 전달받은 buck_inster()함수에
      // input에 입력된 bucket text를 전달하기

      props.buck_insert(bucket);
    }
  };
  return (
    <div className="w3-form-control w3-margin">
      <input
        onKeyDown={onKeyDown}
        className="w3-input w3-border w3-hover-gray w3-round "
        placeholder="이번주에는 무엇을?"
      ></input>
    </div>
  );
}

export default BuckInput;
