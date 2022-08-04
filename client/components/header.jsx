import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-light bg-primary w-100 d-flex mb-3 ">
        <span className="navbar-brand ms-5 h1 mb-0 header" style={{ fontFamily: 'Abril Fatface', textShadow: '1px 1px 1px black', color: 'white', fontSize: '32px' }}>HitDraft.XYZ</span>
        <div className='d-flex justify-content-between me-5'>
          <button type='button' className='btn btn-light me-3'>Game + Draft</button>
          <Link className='btn btn-light' to='/draft'>Draft Only</Link>
        </div>
      </nav>
    </>
  );

}
