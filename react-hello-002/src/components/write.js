import React from "react";

const write = (props) => {
  const { fd, onChangeHandle } = props;
  return (
    <div>
      <p>
        <input
          name="f_name"
          defalutValue={fd.f_name}
          onChange={onChangeHandle}
        ></input>
      </p>
      <p>
        <input
          name="f_addr"
          defalutValue={fd.f_addr}
          onChange={onChangeHandle}
        ></input>
      </p>
    </div>
  );
};

export default write;
