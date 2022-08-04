import React, { useState } from 'react';
export default function Draft(props) {
  const [numberOfDrafters, setNumberOfDrafters] = useState(0);
  const [drafters, setDrafters] = useState([]);
  const placeholderArr = ['First Pick', 'Second Pick', 'Third Pick', 'Fourth Pick', 'Fifth Pick', 'Sixth Pick', 'Seventh Pick', 'Eighth Pick'];

  const onChange = event => {
    setNumberOfDrafters(event.target.value);
  };

  const onConfirm = () => {
    const draftersArr = [];
    for (let i = 0; i < numberOfDrafters; i++) {
      draftersArr.push({});
    }
    setDrafters(draftersArr);
  };
  if (drafters.length > 0) {
    return (
      <>
      <h3>Names</h3>
      <form className='d-flex flex-column'>
      {
        drafters.map((players, index) => (
          <input key={index} className='m-2' placeholder={placeholderArr[index]}></input>
        ))
      }
      </form >
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