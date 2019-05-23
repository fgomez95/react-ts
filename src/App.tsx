import React, { Fragment, useState } from "react";
import { ITodo } from "./components/Todos/TodoTypes";
import Todos from "./components/Todos/Todos";

type FormEvent = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const todosCopy: ITodo[] = [...todos, { text: value, complete: false }];
    setTodos(todosCopy);
    handleClearValue();
  };

  const handleClearValue = (): void => {
    setValue("");
  };

  const handleToggleTodo = (idx: number): void => {
    let todosCopy: ITodo[] = [...todos];
    todosCopy[idx].complete = !todosCopy[idx].complete;
    setTodos(todosCopy);
  };

  const handleRemoveTodo = (idx: number): void => {
    let todosCopy: ITodo[] = [...todos];
    todosCopy.splice(idx, 1);
    setTodos(todosCopy);
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <Todos
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </Fragment>
  );
}

export default App;
