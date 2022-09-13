import React from "react";
import { Todo } from "./todo.tsx";
import { Todos } from "./todoApp.tsx";

type Props = {
  todos: Todos;
};

export const TodoList: React.FC<Props> = (props) => {
  const todos = props.todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });

  return (
    <>
      <p>TodoList</p>
      {todos}
    </>
  );
};
