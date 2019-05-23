import React from "react";
import { ITodo, ITodosProps } from "./TodoTypes";
import Todo from "./Todo";

function Todos(props: ITodosProps): JSX.Element {
  return (
    <section>
      {props.todos.map((todoEl: ITodo, idx: number) => (
        <Todo
          todoEl={todoEl}
          idx={idx}
          handleRemoveTodo={props.handleRemoveTodo}
          handleToggleTodo={props.handleToggleTodo}
          key={idx}
        />
      ))}
    </section>
  );
}

export default Todos;
