import React from "react";
import { Todo as TodoEntity } from "./todoApp.tsx";

type Props = {
  todo: TodoEntity;
};

export const Todo: React.FC<Props> = (props) => {
  const todo = (done: boolean) => {
    if (done) {
      return (
        <p style={{ textDecoration: "line-through" }}>
          {props.todo.text}
        </p>
      );
    }
    return (
      <p>
        {props.todo.text}
      </p>
    );
  };

  return todo(props.todo.done);
};
