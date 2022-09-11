import React from "react";

type Props = {
  onAdd: (text: string) => void;
};

export const InputTodo: React.FC<Props> = (props) => {
  const [text, setText] = React.useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      props.onAdd(text);
      setText("");
    }
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </main>
  );
};
