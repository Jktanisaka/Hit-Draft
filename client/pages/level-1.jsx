import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Level1(Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/level2');
  }
  return (
  <div className="x">
    <div className='y'>
      <button className="gray-square" onClick={handleClick} />
    </div>
  </div>
  );
}
