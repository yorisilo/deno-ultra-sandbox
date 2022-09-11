import React from "react";

export const Index: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <span>Index</span>
      <button className="pure-button" onClick={() => setCount(count + 1)}>
        count up!
      </button>
      <span>
        {count}
      </span>
    </>
  );
};
