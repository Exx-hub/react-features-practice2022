import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function FunctionComponent() {
  const [personState, setPersonState] = useState({
    name: "alvin",
    age: 34,
  });

  const handleClick = () => {
    setPersonState({ ...personState, name: "ACOSTA" });
    setPersonState({ ...personState, name: "BUID" });
  };

  const [input, setInput] = useState("");
  //   console.log(personState);

  const getChildInput = (value) => {
    setInput(value);
  };
  return (
    <div>
      FunctionComponent
      <button onClick={handleClick}>click me</button>
      <h1>Child Input: {input} </h1>
      <ChildComponent getChildInput={getChildInput} />
    </div>
  );
}

export default FunctionComponent;
