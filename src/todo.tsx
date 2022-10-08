import React from "react";
import { Todo as TodoEntity } from "./todoApp.tsx";

type Props = {
  todo: TodoEntity;
  removeTodo: (todo: TodoEntity) => void;
};

type TodoTime = {
  leave: number;
  endDrag: number;
};

export const Todo: React.FC<Props> = (props) => {
  const [checked, setChecked] = React.useState(false);
  props.todo.done = checked;

  const todoTime: TodoTime = {
    leave: Date.now(),
    endDrag: Date.now(),
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(event.target.checked);
  };

  const handeOnDragLeave: React.DragEventHandler<HTMLParagraphElement> = () => {
    todoTime.leave = Date.now();
    console.log(`todoTime.leave: ${todoTime.leave}`);
  };

  const handleOnDragEnd: React.DragEventHandler<HTMLParagraphElement> = () => {
    if (todoTime.leave + 1000 < Date.now()) {
      console.log("remove item");
      props.removeTodo(props.todo);
    }
  };

  const todo = (done: boolean) => {
    if (done) {
      return (
        <p
          style={{ textDecoration: "line-through", display: "inline" }}
          draggable={true}
          onDragLeave={handeOnDragLeave}
          onDragEnd={handleOnDragEnd}
        >
          {props.todo.text}
        </p>
      );
    }
    return (
      <p
        style={{ display: "inline" }}
        draggable={true}
        onDragLeave={handeOnDragLeave}
        onDragEnd={handleOnDragEnd}
      >
        {props.todo.text}
      </p>
    );
  };

  console.log("rendering Todo component");
  console.log(`props.todo.done: ${props.todo.done}`);

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
