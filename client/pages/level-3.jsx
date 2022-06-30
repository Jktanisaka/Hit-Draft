import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

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

  if (state.hoveredButton === true) {
    return (
      <div className="container">
        <div className='row justify-content-end align-items-center full-height'>
           <Link className='gray-square l3-button-hidden' to="/level4" />
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className='row justify-content-center align-items-center full-height'>
        <button style={{ height: 100, width: 100 }} className="l3-button shadow-none" onMouseLeave={ () => { dispatch({ type: 'hoveredButton' }); }} ></button>
      </div>
    </div>
  );
}
