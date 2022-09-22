import React from "react";
import { InputTodo } from "./inputTodo.tsx";
import { TodoList } from "./todoList.tsx";
import { createId } from "./createId.ts";

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export type Todos = Todo[];

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAddTodos = (text: string) => {
    const id = createId(text);
    setTodos((ts) => [...ts, { id: id, text: text, done: false }]);
  };

  return (
    <>
      <h2>TODO</h2>
      <InputTodo onAdd={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  );
};
