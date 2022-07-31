import React from 'react';

export default function Footer(props) {
  return (
  <>
    <div className='container-fluid' style={{ backgroundColor: 'lightgray' }} >
      <div className='row'>
        <div className='col-6 d-flex justify-content-center flex-column '>
          <h5 className='text-center mt-3'>This site was made with</h5>
          <ul className='p-0'>
              <li className='text-center '>React</li>
              <li className='text-center'>JavaScript</li>
              <li className='text-center'>HTML5</li>
              <li className='text-center'>CSS3</li>
              <li className='text-center'>Bootstrap 5</li>
          </ul>
        </div>
        <div className='col-6 d-flex justify-content-center align-items-center'>
            <h4 >Check out this game on GitHub <a target="_blank" href='https://github.com/Jktanisaka/Gray-Square' rel="noreferrer"><i className="fa-brands fa-github a-github"></i></a></h4>
        </div>
      </div>
    </div>
  </>
  );
}
