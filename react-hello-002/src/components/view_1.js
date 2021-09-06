import React from "react";

const view_1 = (props) => {
  // 부모로부터 전달받은 변수중에서
  // friend 라는 이름의 변수를 분리해내기
  const { fo } = props;
  return (
    <div>
      <h1>{fo.f_name}</h1>
      <h1>{fo.f_addr}</h1>
    </div>
  );
};

export default view_1;
