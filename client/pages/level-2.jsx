import React, { useReducer } from 'react';
import Level3 from './level-3';

export default function Level2(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'passedLevel':
        return {
          passedLevel: true
        };
      case 'randomizeDimensions':
        return {
          passedLevel: false,
          count: state.count + 1,
          topDimension: Math.random() * 500,
          leftDimension: Math.random() * 1500
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

  if (state.passedLevel === true) {
    return <Level3 />;
  }
  if (state.count === 6) {
    return (
      <div style={{ position: 'relative' }}>
        <button style={{ top: 300, left: 500, position: 'absolute' }}
          onClick={() => { dispatch({ type: 'passedLevel' }); }}></button>
      </div>
    );
  }
  return (
    <div style={{ position: 'relative' }}>
      <button style={{ top: state.topDimension, left: state.leftDimension, position: 'absolute' }}
      onMouseEnter={() => { dispatch({ type: 'randomizeDimensions' }); }}></button>
    </div>
  );
}
