import React from "react";
import { ITodoProps } from "./TodoTypes";

function Todo(props: ITodoProps): JSX.Element {
  return (
    <div key={props.idx}>
      <span>{props.todoEl.text} </span>
      <button onClick={() => props.handleToggleTodo(props.idx)}>
        {props.todoEl.complete ? "Incomplete" : "Complete"}
      </button>
      <button onClick={() => props.handleRemoveTodo(props.idx)}>Remove</button>
    </div>
  );
}

export default Todo;
