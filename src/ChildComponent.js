import React, { useEffect, useState } from "react";

function ChildComponent({ getChildInput }) {
  const [input, setInput] = useState("");

  const handleClick = () => {
    getChildInput(input);
  };
  return (
    <div>
      ChildComponent
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>GET INPUT</button>
    </div>
  );
}

export default ChildComponent;
