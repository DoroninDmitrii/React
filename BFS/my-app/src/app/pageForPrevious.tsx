'use client'

import { useState } from "react";
import { usePrevious } from "./hooks/5.usePrevious";


export function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Ivan');

  const prevousCount = usePrevious(count);

  return (
    <div>
      <div>
        {count} - {prevousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(curCount => curCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName('Petia')}>Change Name</button>
    </div>
  );
}
