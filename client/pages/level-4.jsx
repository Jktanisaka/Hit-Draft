import React, { useState } from 'react';
import Level5 from './level-5';

export default function Level4(props) {
  const [passed, setPassed] = useState(false);
  const increment = () => {
    setPassed(!passed);
  };
  if (passed === true) {
    return <Level5 />;
  }
  return (
    <div className="disappearing-cursor container-fluid">
      <div className='row justify-content-start align-items-center full-height m-0'>
        <button style={{ height: 100, width: 100 }} onClick={ increment } className="m-5"></button>
      </div>
    </div>
  );
}
