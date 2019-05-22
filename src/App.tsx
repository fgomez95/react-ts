import React, { Fragment, useState } from "react";

type FormEvent = React.FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}
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
      <section>
        {todos.map((todoEl, idx) => (
          <div key={idx}>
            <span>{todoEl.text} </span>
            <button onClick={() => handleToggleTodo(idx)}>
              {todoEl.complete ? "Incomplete" : "Complete"}
            </button>
            <button onClick={() => handleRemoveTodo(idx)}>Remove</button>
          </div>
        ))}
      </section>
    </Fragment>
  );
}

export default App;
