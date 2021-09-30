import React from "react";
import "../css/TodoInput.css";
import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const { todo, onChange, onClick } = useTodoContext();
  return (
    <div className="form">
      <input value={todo.t_text} onChange={onChange} onKeyPress={onKeyPress} />
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
