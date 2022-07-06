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
      <div className='container-fluid p-0 m-0'>
        <div className='d-flex justify-content-center align-items-center full-height w-100 m-0 p-0'>
          <div className='col-12 expand d-flex align-items-center justify-content-center flex-column'>
            <h1>{`Time: ${time} seconds`}</h1>
            <h2>Check out this game on GitHub <a href='asdf'><i className="fa-brands fa-github"></i></a></h2>
            <h2>Connect with me on Linkedin <a href='asdf'><i className="fa-brands fa-linkedin"></i></a></h2>
            </div>
        </div>
      </div >
    );
  }
  return (
  <div className="container-fluid p-0">
    <div className='row justify-content-center align-items-center full-height m-0 p-0'>
      <button className= "l5-button" onClick={increment}></button>
    </div>
  </div>);
}
