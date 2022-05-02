import React, { useEffect, useState } from "react";

function Test() {
  const [input, setInput] = useState("");
  // console.log(input);
  // console.log("hello");

  useEffect(() => {
    console.log("component mounted - once component mounts");
  }, []);

  useEffect(() => {
    console.log("hello from useEffect - every rerender");
  });

  useEffect(() => {
    console.log(
      "every time conditionally re-rendered",
      "input changed:",
      input
    );

    return () => console.log("cleanup! before next render!");
  }, [input]);
  return (
    <>
      <div>test</div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default Test;
