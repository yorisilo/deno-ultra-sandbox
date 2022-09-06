import React from "react";
import { InputTodo } from "./inputTodo.tsx";
import { TodoList } from "./todoList.tsx";

type Todo = {
  text: string;
  done: boolean;
};

export const TodoApp: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAddTodos = (text: string) => {
    setTodos((ts) => [...ts, { text: text, done: false }]);
  };

  return (
    <main>
      <h2>TODO</h2>
      <InputTodo />
      <TodoList />
    </main>
  );
};
