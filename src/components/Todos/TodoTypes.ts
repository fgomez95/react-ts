export interface ITodo {
  text: string;
  complete: boolean;
}
export interface ITodosProps {
  todos: ITodo[];
  handleToggleTodo(idx: number): void;
  handleRemoveTodo(idx: number): void;
}
export interface ITodoProps {
  idx: number;
  handleToggleTodo(idx: number): void;
  handleRemoveTodo(idx: number): void;
  todoEl: ITodo;
}
