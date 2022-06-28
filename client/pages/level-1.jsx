import React, { useState } from 'react';
import Level2 from './level-2';

export default function Level1(Props) {
  const [counter, setCounter] = useState(false);
  const increment = () => {
    setCounter(!counter);
  };

  if (counter === true) {
    return <Level2 />;
  }
  return (
  <div className="x">
      <button className="y" onClick={increment}></button>
  </div>
  );
}
