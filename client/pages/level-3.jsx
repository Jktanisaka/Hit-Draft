import React, { useReducer } from 'react';
import Level4 from './level-4';

export default function Level3(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'passedLevel':
        return {
          passedLevel: true
        };
      case 'hoveredButton':
        return {
          hoveredButton: true,
          passedLevel: false
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer,
    {
      hoveredButton: false,
      passedLevel: false
    });
  if (state.passedLevel === true) {
    return <Level4 />;
  }
  if (state.hoveredButton === true) {
    return (
      <div className="container">
        <div className='row justify-content-end align-items-center full-height shadow-none'>
          <button style={{ height: 100, width: 100 }} className="l3-button-hidden shadow-none" onClick={() => { dispatch({ type: 'passedLevel' }); }} ></button>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className='row justify-content-center align-items-center full-height shadow-none'>
        <button style={{ height: 100, width: 100 }} className="l3-button shadow-none" onMouseLeave={ () => { dispatch({ type: 'hoveredButton' }); }} ></button>
      </div>
    </div>
  );
}
