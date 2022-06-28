import React, { useState } from 'react';

export default function Level2(props) {
  const [counter, setCounter] = useState(0);
  const [topDimension, setTopDimension] = useState(100);
  const [leftDimension, setLeftDimension] = useState(100);

  const increment = () => {
    setCounter(counter + 1);
  };

  const handleEnter = () => {
    setTopDimension(Math.random() * 1000);
    setLeftDimension(Math.random() * 1000);
  };

  return (
    <div style={{ position: 'relative' }}>
      <button style={{ top: topDimension, left: leftDimension, position: 'absolute' }} onMouseEnter={handleEnter} onClick={increment}></button>
    </div>
  );
}
