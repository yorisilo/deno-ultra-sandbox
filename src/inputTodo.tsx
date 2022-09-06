import React from "react";

export const InputTodo: React.FC = () => {
  const [text, setText] = React.useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
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
