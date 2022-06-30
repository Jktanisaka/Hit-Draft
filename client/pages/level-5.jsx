import React, { useState } from 'react';

export default function Level5(props) {
  const [passed, setPassed] = useState(false);
  const increment = () => {
    setPassed(!passed);
  };
  if (passed === true) {
    return (
      <div className="container-fluid p-0 final">

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
