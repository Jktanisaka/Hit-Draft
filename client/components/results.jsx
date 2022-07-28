import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Results(props) {
  const { state } = useLocation();
  const winners = state.length;

  return (
    <div className='d-flex justify-content-evenly align-items-center'>
           {
            state.map((player, index) => (
              <div key={index} className='col-2 d-flex flex-column ' style={{ backgroundColor: 'white', border: `2px solid ${player.color}`, animation: `fade-in ${index + 1}s` }} >
                <p className='text-center m-2' style={{ fontSize: 20 }}>{player.name}(#{index + 1})</p>
                <form className='row justify-content-center mb-3'>
                  <input className='mb-1'style={{ width: '80%' }} tabIndex={parseInt(index + 1)} placeholder='1st Pick'></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(2 * winners) - parseInt(index)} placeholder='2nd Pick'></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(3 - 1) * winners + index + 1} placeholder="3rd Pick"></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(4 * winners) - parseInt(index)} placeholder='4th Pick'></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(5 - 1) * winners + index + 1} placeholder="5th Pick"></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(6 * winners) - parseInt(index)} placeholder='6th Pick'></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(7 - 1) * winners + index + 1} placeholder="7th Pick"></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(8 * winners) - parseInt(index)} placeholder="8th Pick"></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(9 - 1) * winners + index + 1} placeholder="9th Pick"></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(10 * winners) - parseInt(index)} placeholder="10th Pick"></input>
                  <textarea style={{ width: '80%' }} placeholder='Additional Notes'></textarea>
                </form>
              </div>

            ))
          }

        </div>
  );
}
