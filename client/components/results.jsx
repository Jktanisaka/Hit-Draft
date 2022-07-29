import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CSVLink } from 'react-csv';
export default function Results(props) {
  const { state } = useLocation();
  const winners = state.length;
  const [picks, setPicks] = useState(state);

  // useEffect(() => {
  //   const winnerArr = [['Name', '1st Pick', '2nd Pick', '3rd Pick', '4th Pick', '5th Pick', '6th Pick', '7th Pick', '8th Pick', '9th Pick', '10th Pick', 'Additional Notes']];
  //   state.map(winner => (
  //     winnerArr.push([`${winner.name}`, '', '', '', '', '', '', '', '', '', '', ''])
  //   ));
  //   const duplicatePicks = [...picks];
  //   duplicatePicks.push(winnerArr);
  //   setPicks(duplicatePicks);

  // }, []);

  const onChange = event => {
    const stateCopy = [...picks];
    const inputIndex = event.target.getAttribute('data-index');
    const playerIndex = event.target.getAttribute('player-index');
    stateCopy[playerIndex][inputIndex] = event.target.value;
    setPicks(stateCopy);
  };

  return (
    <>
    <div className='d-flex justify-content-evenly align-items-center'>
           {
            picks.slice(1).map((player, index) => {
              return (<div key={index} className='col-2 d-flex flex-column ' style={{ backgroundColor: 'white', border: `2px solid ${player.color}`, animation: `fade-in ${index + 1}s` }} >
                <p className='text-center m-2' style={{ fontSize: 20 }}>{player[0]}(#{index + 1})</p>
                <form className='row justify-content-center mb-3'>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={parseInt(index + 1)} placeholder='1st Pick' onChange={onChange} data-index={1} player-index={index + 1} value={player[1]} ></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(2 * winners) - parseInt(index)} placeholder='2nd Pick' onChange={onChange} data-index={2} player-index={index + 1} value={player[2]} ></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(3 - 1) * winners + index + 1} placeholder="3rd Pick" onChange={onChange} data-index={3} player-index={index + 1} value={player[3]}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(4 * winners) - parseInt(index)} placeholder='4th Pick' onChange={onChange} data-index={4} player-index={index + 1} value={player[4]}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(5 - 1) * winners + index + 1} placeholder="5th Pick" onChange={onChange} data-index={5} player-index={index + 1} value={player[5]}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(6 * winners) - parseInt(index)} placeholder='6th Pick' onChange={onChange} data-index={6} player-index={index + 1} value={player[6]}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(7 - 1) * winners + index + 1} placeholder="7th Pick" onChange={onChange} data-index={7} player-index={index + 1} value={player[7]}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(8 * winners) - parseInt(index)} placeholder="8th Pick" onChange={onChange} data-index={8} player-index={index + 1} value={player[8]}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(9 - 1) * winners + index + 1} placeholder="9th Pick" onChange={onChange} data-index={9} player-index={index + 1} value={player[9]}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(10 * winners) - parseInt(index)} placeholder="10th Pick" onChange={onChange} data-index={10} player-index={index + 1} value={player[10]}></input>
                  <textarea style={{ width: '80%' }} placeholder='Additional Notes' onChange={onChange} data-index={11} player-index={index + 1} value={player[11]}></textarea>
                </form>
              </div>);

            })
          }
      </div>
      <CSVLink data={picks} className='btn btn-success'>Download CSV<i className='fa-solid fa-file-arrow-down ms-2'></i></CSVLink>
      </>
  );
}
