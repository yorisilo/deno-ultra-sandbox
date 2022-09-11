import React from "react";
import { Todo as TodoEntity } from "./todoApp.tsx";

type Props = {
  todo: TodoEntity;
};

export const Todo: React.FC<Props> = (props) => {
  return (
    <p>
      {props.todo.text}
    </p>
  );
};
