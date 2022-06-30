import React from 'react';
import { Link } from 'react-router-dom';

export default function Level4(props) {

  return (
    <div className="disappearing-cursor container-fluid">
      <div className='row justify-content-start align-items-center full-height m-0'>
        <Link style={{ height: 100, width: 100 }} className="gray-square m-5" to="/level5" />
      </div>
    </div>
  );
}
