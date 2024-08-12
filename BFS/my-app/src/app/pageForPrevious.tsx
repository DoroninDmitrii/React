'use client'

import { useState } from "react";
import { usePrevious } from "./hooks/5.usePrevious";
import { useClickOutside } from "./hooks/15.useClickOutside";


export function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Ivan');

  const prevousCount = usePrevious(count);
  
  // outsideclick
  const onClickOutside = () => console.log('hello world!');
  const ref = useClickOutside(onClickOutside);

  
  return (
    <div>
      {/* <div>
        {count} - {prevousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(curCount => curCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName('Petia')}>Change Name</button> */}

      <div
      className="click-box"
      ref={ref}
      style={{
        border: "2px dashed orangered",
        height: 200,
        width: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <p>Click out of this element</p>
    </div>
    </div>
  );
}

