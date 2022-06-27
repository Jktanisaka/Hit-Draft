import React, { useState } from 'react';
export default function Level1(Props) {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
  <div className="x">
      <button className="y" onClick={increment}></button>
  </div>
  );
}
