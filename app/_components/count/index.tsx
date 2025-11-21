"use client";

import { useState } from "react";

const Countable = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2 items-start">
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
};

export { Countable };
