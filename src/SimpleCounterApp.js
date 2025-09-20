import React, { useState } from "react";

function SimpleCounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Counter App</h2>
      <h1>{count}</h1>
      <div style={{ display: "inline-flex", gap: "8px" }}>
        <button onClick={increment}>+</button>
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default SimpleCounterApp;
