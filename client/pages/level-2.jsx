import React, { useReducer } from 'react';

export default function Level2(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1,
          topDimension: state.topDimension,
          leftDimension: state.leftDimension
        };
      case 'randomizeDimensions':
        return {
          count: state.count,
          topDimension: Math.random() * 1000,
          leftDimension: Math.random() * 1000
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer,
    {
      count: 0,
      topDimension: 100,
      leftDimension: 100
    });

  // const [counter, setCounter] = useState(0);
  // const [topDimension, setTopDimension] = useState(100);
  // const [leftDimension, setLeftDimension] = useState(100);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const handleEnter = () => {
  //   setTopDimension(Math.random() * 1000);
  //   setLeftDimension(Math.random() * 1000);
  // };

  return (
    <div style={{ position: 'relative' }}>
      <button style={{ top: state.topDimension, left: state.leftDimension, position: 'absolute' }}
      onMouseEnter={() => { dispatch({ type: 'randomizeDimensions' }); }}
      onClick={() => { dispatch({ type: 'INCREMENT' }); }}></button>
    </div>
  );
}
