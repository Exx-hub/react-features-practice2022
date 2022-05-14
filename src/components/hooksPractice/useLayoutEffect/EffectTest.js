import React, { useEffect, useState } from "react";

function EffectTest() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <div>{count}</div>
    </div>
  );
}

export default EffectTest;
