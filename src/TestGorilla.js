import React, { useEffect, useState } from "react";

function TestGorilla() {
  const [count, setCount] = useState(0);
  console.log("hello");

  useEffect(() => {
    console.log("useeffect code");
    setCount((c) => c + 1);
  }, []);

  return <div>{count}</div>;
}

export default TestGorilla;
