import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { useBeforeunload } from 'react-beforeunload';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default function Results(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCSV, setShowCSV] = useState(false);
  const handleCloseCSV = () => setShowCSV(false);
  const handleShowCSV = () => setShowCSV(true);

  const [fileName, setFileName] = useState('');

  const { state } = useLocation();
  const winners = state.length;
  const [picks, setPicks] = useState(state);

  useBeforeunload(event => {
    localStorage.setItem('winners', JSON.stringify(picks));
  });

  useEffect(() => {
    const winners = JSON.parse(localStorage.getItem('winners'));
    if (winners) {
      setPicks(winners);
    }
  }, []);
  const handleFocus = event => {
    const selectedDiv = event.target.closest('div');
    selectedDiv.classList.add('focused');
  };
  const handleReset = () => {
    setPicks([]);
    localStorage.removeItem('winners');
    setShow(false);
    navigate('/');
  };
  const fileNameChange = event => {
    setFileName(event.target.value);
  };
  const onChange = event => {
    const stateCopy = [...picks];
    const inputIndex = event.target.getAttribute('data-index');
    const playerIndex = event.target.getAttribute('player-index');
    stateCopy[playerIndex][inputIndex] = event.target.value;
    setPicks(stateCopy);
  };

  return (
    <>
    <div className='d-flex justify-content-evenly align-items-center ms-2 me-2'>
           {
            picks.slice(1).map((player, index) => {
              return (<div key={index} className='col-2 d-flex flex-column focused' style={{ border: 'white', animation: `fade-in ${parseInt(index)}s` }} >
                <h3 className='text-center m-2' style={{ fontSize: 20, display: 'inline' }}>{player[0]}<p style={{ display: 'inline', fontSize: 14 }} className='text-muted'>(#{index + 1})</p></h3>
                <form className='row justify-content-center mb-3'>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={parseInt(index + 1)} placeholder='1st Pick' onChange={onChange} data-index={1} player-index={index + 1} value={player[1]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(2 * winners) - parseInt(index)} placeholder='2nd Pick' onChange={onChange} data-index={2} player-index={index + 1} value={player[2]} onFocus={handleFocus} ></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(3 - 1) * winners + index + 1} placeholder="3rd Pick" onChange={onChange} data-index={3} player-index={index + 1} value={player[3]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(4 * winners) - parseInt(index)} placeholder='4th Pick' onChange={onChange} data-index={4} player-index={index + 1} value={player[4]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(5 - 1) * winners + index + 1} placeholder="5th Pick" onChange={onChange} data-index={5} player-index={index + 1} value={player[5]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(6 * winners) - parseInt(index)} placeholder='6th Pick' onChange={onChange} data-index={6} player-index={index + 1} value={player[6]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(7 - 1) * winners + index + 1} placeholder="7th Pick" onChange={onChange} data-index={7} player-index={index + 1} value={player[7]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(8 * winners) - parseInt(index)} placeholder="8th Pick" onChange={onChange} data-index={8} player-index={index + 1} value={player[8]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(9 - 1) * winners + index + 1} placeholder="9th Pick" onChange={onChange} data-index={9} player-index={index + 1} value={player[9]} onFocus={handleFocus}></input>
                  <input className='mb-1' style={{ width: '80%' }} tabIndex={(10 * winners) - parseInt(index)} placeholder="10th Pick" onChange={onChange} data-index={10} player-index={index + 1} value={player[10]} onFocus={handleFocus}></input>
                  <textarea style={{ width: '80%' }} rows="8" placeholder='Additional Notes' onChange={onChange} data-index={11} player-index={index + 1} value={player[11]} onFocus={handleFocus}></textarea>
                </form>
              </div>);

            })
          }
      </div>
      <div className='mb-5'>
        <Button variant='success' className='me-2' onClick={handleShowCSV}>Download CSV<i className='fa-solid fa-file-arrow-down ms-2'></i></Button>
        <Button variant='primary' onClick={handleShow}>Start new hit draft</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Start new hit draft</Modal.Title>
        </Modal.Header>
        <Modal.Body>Starting a new hit draft will erase the current hit draft. Download the current one if you want to save it.</Modal.Body>
        <Modal.Footer className='d-flex justify-content-evenly'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleReset}>
            Start new draft
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showCSV} onHide={handleCloseCSV}>
        <Modal.Header closeButton>
          <Modal.Title>Download CSV</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'><input placeholder='Enter file name' className='col-8' onChange={fileNameChange}></input></Modal.Body>
        <Modal.Footer className='d-flex justify-content-evenly'>
          <Button variant="secondary" onClick={handleCloseCSV}>
            Close
          </Button>
          <CSVLink data={picks} filename={fileName} className='btn btn-success me-2'>Download CSV<i className='fa-solid fa-file-arrow-down ms-2'></i></CSVLink>
        </Modal.Footer>
      </Modal>
      </>
  );
}
