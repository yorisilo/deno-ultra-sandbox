import React from "react";
import { Todo } from "./todo.tsx";

type Props = {};

export const TodoList: React.FC<Props> = (props) => {
  return (
    <main>
      <span>TodoList</span>
      <Todo />
    </main>
  );
};
