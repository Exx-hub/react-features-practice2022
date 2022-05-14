import React, { useMemo, useState } from "react";

function MemoCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => setCounterOne((prev) => prev + 1);
  const incrementTwo = () => setCounterTwo((prev) => prev + 1);

  const isEven = useMemo(() => {
    let i = 0;

    while (i < 2000000000) i++;

    return counterOne % 2 === 0;
  }, [counterOne]);

  // const memoizedIsEvenValue = useMemo(isEven, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>
          Count One - {counterOne} - {isEven ? "Even" : "Odd"}
        </button>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default MemoCounter;
