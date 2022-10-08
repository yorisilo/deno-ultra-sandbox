import React from "react";
import { Todo as TodoItem } from "./todo.tsx";
import { Todo, Todos } from "./todoApp.tsx";

type Props = {
  todos: Todos;
  removeTodo: (todo: Todo) => void;
};

export const TodoList: React.FC<Props> = (props) => {
  console.log("TodoList");

  const todoElms = (todos: Todos) => {
    return todos.map((todo) => {
      return (
        <TodoItem key={todo.id} todo={todo} removeTodo={props.removeTodo} />
      );
    });
  };

  return (
    <>
      <p>TodoList</p>
      {todoElms(props.todos)}
    </>
  );
};
