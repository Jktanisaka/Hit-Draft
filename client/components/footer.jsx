import React from 'react';

export default function Footer(props) {
  return (
  <>
      <div className='container-fluid' style={{ backgroundColor: '#d7d9db', align: 'bottom' }} >
      <div className='row'>
        <div className='col-6 d-flex justify-content-center flex-column '>
          <h5 className='text-center mt-3'>This site was made with</h5>
          <ul className='p-0'>
              <li className='text-center '>React</li>
              <li className='text-center'>JavaScript</li>
              <li className='text-center'>Lodash</li>
              <li className='text-center'>HTML5</li>
              <li className='text-center'>CSS3</li>
              <li className='text-center'>Bootstrap 5</li>
          </ul>
        </div>
        <div className='col-6 d-flex justify-content-center align-items-center flex-column'>
            <h5 >Check out this page on GitHub <a target="_blank" href='https://github.com/Jktanisaka/hit-draft' rel="noreferrer"><i className="fa-brands fa-github a-github" style={{ color: 'black', fontSize: 28 }}></i></a></h5>
            <h5> Connect with me on LinkedIn  <a target="_blank" href='https://linkedin.com/in/jonathan-tanisaka' rel="noreferrer"><i className="fa-brands fa-linkedin a-linkedin" style={{ fontSize: 28 }}></i></a></h5>
            <h5> View other projects in my portfolio  <a target="_blank" href='https://www.jonathantanisaka.com' rel="noreferrer"><i className='fa-solid fa-folder-open' style={{ fontSize: 28, color: 'black' }}></i></a></h5>
        </div>
      </div>
    </div>
  </>
  );
}
