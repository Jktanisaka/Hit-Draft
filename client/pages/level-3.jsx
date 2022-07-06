import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';

export default function Level3(props) {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'hoveredButton':
        return {
          hoveredButton: true
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer,
    {
      hoveredButton: false
    });

  if (state.hoveredButton === true) {
    return (
      <div className="container position-relative">
        <div className='row justify-content-center align-items-center fade-out full-height'>
          <button style={{ height: 100, width: 100 }} className="l3-button shadow-none" disabled></button>
        </div>
           <Link className='gray-square l3-button-hidden position-absolute' to="/level4" style={{ top: 300, left: 800 }}/>
      </div>
    );
  }
  return (
    <div className="container">
      <div className='row justify-content-center align-items-center full-height'>
        <button style={{ height: 100, width: 100 }} className="l3-button shadow-none" onMouseEnter={ () => { dispatch({ type: 'hoveredButton' }); }} ></button>
      </div>
    </div>
  );
}
