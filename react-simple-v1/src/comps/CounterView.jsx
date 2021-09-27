import React from "react";
import CounterButton from "./CounterButton";

function CounterView({ count }) {
  return (
    <div>
      <h1>카운트:{count}</h1>
    </div>
  );
}

export default CounterView;
