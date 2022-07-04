import React, { useState } from 'react';

export default function Level5(props) {
  const [passed, setPassed] = useState(false);
  const increment = () => {
    setPassed(!passed);
  };
  if (passed === true) {
    props.stopTimer();
    const time = props.timer / 100;
    return (
      <div className="container-fluid p-0 final">
        <h1 className='col-12 d-flex justify-content-center align-items-center h-100'>{`Time: ${time} seconds`}</h1>
      </div>
    );
  }
  return (
  <div className="container-fluid p-0">
    <div className='row justify-content-center align-items-center full-height m-0 p-0'>
      <a className= "asdf" onMouseUp={increment}></a>
    </div>
  </div>);
}
