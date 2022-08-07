import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Draft(props) {
  const [numberOfDrafters, setNumberOfDrafters] = useState(0);
  const [drafters, setDrafters] = useState([]);
  const placeholderArr = ['First Pick', 'Second Pick', 'Third Pick', 'Fourth Pick', 'Fifth Pick', 'Sixth Pick', 'Seventh Pick', 'Eighth Pick'];

  const nameChange = event => {
    const targetIndex = parseInt(event.target.getAttribute('data-index'));
    const copyDrafters = [...drafters];
    copyDrafters[targetIndex][0] = event.target.value;
    setDrafters(copyDrafters);
  };

  const onChange = event => {
    setNumberOfDrafters(event.target.value);
  };

  const onConfirm = () => {
    const draftersArr = [['Name', '1st Pick', '2nd Pick', '3rd Pick', '4th Pick', '5th Pick', '6th Pick', '7th Pick', '8th Pick', '9th Pick', '10th Pick', 'Additional Notes']];
    for (let i = 0; i < numberOfDrafters; i++) {
      draftersArr.push(['', '', '', '', '', '', '', '', '', '', '', '']);
    }
    setDrafters(draftersArr);
  };

  if (drafters.length > 1) {
    return (
      <>
      <h3>Names</h3>
      <form className='d-flex flex-column col-2'>
      {
        drafters.slice(1).map((players, index) => (
          <input key={index} className='mt-2 mb-2' placeholder={placeholderArr[index]} onChange={nameChange} data-index={index + 1} value={drafters[index + 1][0]}></input>
        ))
      }
      </form >
      <Link className='btn btn-primary col-2 mt-2' to="/draft-results" state={{ drafters }} > Submit</Link>
      </>
    );
  }
  return (
    <>
    <div className='container-fluid d-flex flex-column justify-content-center'>
        <label htmlFor="players" style={{ fontSize: 28 }} className='m-3 text-center'>Number of Drafters</label>
      <form className='d-flex justify-content-center align-items-center'>
        <select id='players' defaultValue='' onChange={onChange} className='w-25 form-control col-4 text-muted'>
          <option value='' className='text-muted' disabled >How many people are drafting?</option>
          <option value="2" className='text-black'>2</option>
          <option value="3" className='text-black'>3</option>
          <option value="4" className='text-black'>4</option>
          <option value="5" className='text-black'>5</option>
          <option value="6" className='text-black'>6</option>
          <option value="7" className='text-black'>7</option>
          <option value="8" className='text-black'>8</option>
        </select>
          <button type='button' className='ms-1 btn btn-primary' onClick={onConfirm}>Confirm</button>
      </form>
    </div>
    </>
  );
}
