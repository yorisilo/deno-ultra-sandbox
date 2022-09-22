import React from "react";
import { Todo as TodoEntity } from "./todoApp.tsx";

type Props = {
  todo: TodoEntity;
};

export const Todo: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(false);
  props.todo.done = checked;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.target.checked);
  };

  const todo = (done: boolean) => {
    if (done) {
      return (
        <p style={{ textDecoration: "line-through", display: "inline" }}>
          {props.todo.text}
        </p>
      );
    }
    return (
      <p style={{ display: "inline" }}>
        {props.todo.text}
      </p>
    );
  };

  console.log("rendering Todo component");

  return (
    <label style={{ padding: "1px", display: "block" }}>
      <input
        type="checkbox"
        onChange={handleChange}
        style={{ display: "inline" }}
      />
      {todo(props.todo.done)}
    </label>
  );
};
