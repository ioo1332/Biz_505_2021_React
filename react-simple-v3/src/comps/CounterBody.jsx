import React from "react";
import CounterInput from "./CounterInput";
import CounterView from "./CounterView";

function CounterBody(props) {
  return (
    <div>
      <CounterInput setState={props.setCount} />
      <CounterView count={props.count} />
    </div>
  );
}

export default CounterBody;
