import React from 'react';
import _ from 'lodash';
import { Navigate } from 'react-router-dom';
export default class Race extends React.Component {
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.selectChangeHandler = this.selectChangeHandler.bind(this);
    this.nameEnter = this.nameEnter.bind(this);
    this.state = {
      players: [],
      winners: [0],
      numberOfPlayers: 0

    };
  }

  onStart(props) {
    this.setState({ winners: [] });
    const intervalID = setInterval(
      () => {
        const copyPlayerArr = [...this.state.players];
        const copyWinnersArr = [...this.state.winners];
        const comparativePlayerArr = [];
        for (let i = 0; i < copyPlayerArr.length; i++) {
          if (copyPlayerArr[i].left < window.innerWidth - 200) {
            comparativePlayerArr.push(copyPlayerArr[i]);
          }
        }
        const randomPlayer = _.sample(comparativePlayerArr);
        randomPlayer.left = randomPlayer.left + 100;
        if (randomPlayer.left > window.innerWidth - 200) {
          copyWinnersArr.push(randomPlayer);
        }
        this.setState({ players: comparativePlayerArr });
        this.setState({ winners: copyWinnersArr });
        this.setState({ intervalID });
      }, 1000
    );

  }

  selectChangeHandler(event) {
    const colors = ['blue', ' red', 'black', 'green', 'gray', 'pink', 'purple', 'orange'];
    const players = [];
    for (let i = 0; i < event.target.value; i++) {
      players.push({ player: i + 1, left: 100, height: 0, color: colors[i], name: '' });

    }
    this.setState({ players });
    this.setState({ numberOfPlayers: event.target.value });
  }

  nameEnter(event) {
    const targetIndex = event.target.getAttribute('index');
    const copyPlayerArr = [...this.state.players];
    copyPlayerArr[targetIndex].name = event.target.value;
    this.setState({ players: copyPlayerArr });
  }

  render(props) {

    if (parseInt(this.state.winners.length) === parseInt(this.state.numberOfPlayers)) {
      clearInterval(this.state.intervalID);
      // const winners = this.state.winners.length;
      return <Navigate to='/results' state={this.state.winners} />;
      // return (
      //   <div className='d-flex justify-content-evenly align-items-center'>
      //     {
      //       this.state.winners.map((player, index) => (
      //         <div key={index} className='col-2 d-flex flex-column ' style={{ backgroundColor: 'white', border: `2px solid ${player.color}`, animation: `fade-in ${index + 1}s` }} >
      //           <p className='text-center m-2' style={{ fontSize: 20 }}>{player.name}(#{index + 1})</p>
      //           <form className='row justify-content-center mb-3'>
      //             <input className='mb-1'style={{ width: '80%' }} tabIndex={parseInt(index + 1)} placeholder='1st Pick'></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(2 * winners) - parseInt(index)} placeholder='2nd Pick'></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(3 - 1) * winners + index + 1} placeholder="3rd Pick"></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(4 * winners) - parseInt(index)} placeholder='4th Pick'></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(5 - 1) * winners + index + 1} placeholder="5th Pick"></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(6 * winners) - parseInt(index)} placeholder='6th Pick'></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(7 - 1) * winners + index + 1} placeholder="7th Pick"></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(8 * winners) - parseInt(index)} placeholder="8th Pick"></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(9 - 1) * winners + index + 1} placeholder="9th Pick"></input>
      //             <input className='mb-1' style={{ width: '80%' }} tabIndex={(10 * winners) - parseInt(index)} placeholder="10th Pick"></input>
      //             <textarea style={{ width: '80%' }} placeholder='Additional Notes'></textarea>
      //           </form>
      //         </div>

      //       ))
      //     }

      //   </div>
      // );
    }
    return (
      <>
      <div className='container-fluid row justify-content-center align-items-center m-0'>
        <form className='d-flex flex-column justify-content-center align-items-center'>
          <label htmlFor="players" style={{ fontSize: 28 }} className='m-3'>Number of Players</label>
          <select id='players' onChange={this.selectChangeHandler} className='w-25 form-control col-4 text-muted'>
            <option value='' className='text-muted' selected disabled >How many people are drafting?</option>
            <option value="2" className='text-black'>2</option>
            <option value="3" className='text-black'>3</option>
            <option value="4" className='text-black'>4</option>
            <option value="5" className='text-black'>5</option>
            <option value="6" className='text-black'>6</option>
            <option value="7" className='text-black'>7</option>
            <option value="8" className='text-black'>8</option>
          </select>
        </form>
        <div className='race-track p-3 pt-0' >
          {
            this.state.players.map((player, index) => (
              <div key={index} className='position-relative track m-3 winner-card'>
                <input index={index} style={{ width: 100, border: `2px solid ${player.color}` }} value={player.name} onChange={this.nameEnter} ></input>
                <i className='fa-solid fa-dog position-absolute' style={{ height: player.height, width: 100, fontSize: 38, color: player.color, left: player.left }}></i>
                <div className='position-absolute ' style={{ top: 0, left: window.innerWidth - 200, border: '1px solid black', height: 50 }}></div>
              </div>
            ))
          }
        </div>
        <button className='col-4 btn btn-primary' type='submit' onClick={this.onStart}>Start Race</button>
      </div>

      </>
    );
  }
}

// export default function Race(props) {
//   const navigate = useNavigate();
//   const [players, setPlayers] = useState([]);
//   const [winners, setWinners] = useState([0]);
//   const [numberOfPlayers, setNumberOfPlayers] = useState(0);
//   const [intervalID, setIntervalID] = useState('');

//   const addPlayers = event => {
//     const colors = ['blue', ' red', 'black', 'green', 'gray', 'pink', 'purple', 'orange'];
//     const playersArr = [];
//     for (let i = 0; i < event.target.value; i++) {
//       playersArr.push({ player: i + 1, left: 100, height: 0, color: colors[i], name: '' });
//     }

//     setPlayers(playersArr);
//     setNumberOfPlayers(parseInt(event.target.value));
//   };

//   const nameEnter = event => {
//     const targetIndex = event.target.getAttribute('index');
//     const copyPlayerArr = [...players];
//     copyPlayerArr[targetIndex].name = event.target.value;
//     setPlayers(copyPlayerArr);
//   };

//   const onStart = () => {
//     const intervalID = setInterval(
//       () => {
//         const copyPlayerArr2 = [...players];
//         const copyWinnersArr = [...winners];
//         const comparativePlayerArr = [];
//         for (let i = 0; i < copyPlayerArr2.length; i++) {
//           if (copyPlayerArr2[i].left < window.innerWidth - 200) {
//             comparativePlayerArr.push(copyPlayerArr2[i]);
//           }
//         }
//         const randomPlayer = _.sample(comparativePlayerArr);
//         randomPlayer.left = randomPlayer.left + 100;
//         if (randomPlayer.left > window.innerWidth - 200) {
//           copyWinnersArr.push(randomPlayer);
//         }
//         setPlayers(comparativePlayerArr);
//         setWinners(copyWinnersArr);
//         setIntervalID(intervalID);
//         console.log('copywinners', copyWinnersArr);
//         console.log(numberOfPlayers);
//         console.log(winners.length);
//         console.log('winners', winners);
//       }, 1000
//     );
//   };

//   if (players.length >= 2) {
//     if (parseInt(winners.length) === parseInt(numberOfPlayers)) {
//       console.log(winners.length);
//       console.log(parseInt(numberOfPlayers));
//       clearInterval(intervalID);
//       return navigate('/results', { state: { winners } });
//     }
//   }
//   return (
//     <>
//       <div className='container-fluid row justify-content-center align-items-center m-0'>
//         <form className='d-flex flex-column justify-content-center align-items-center'>
//           <label htmlFor="players" style={{ fontSize: 28 }} className='m-3'>Number of Players</label>
//           <select id='players' onChange={addPlayers} defaultValue='' className='w-25 form-control col-4 text-muted'>
//             <option value='' className='text-muted' disabled >How many people are drafting?</option>
//             <option value="2" className='text-black'>2</option>
//             <option value="3" className='text-black'>3</option>
//             <option value="4" className='text-black'>4</option>
//             <option value="5" className='text-black'>5</option>
//             <option value="6" className='text-black'>6</option>
//             <option value="7" className='text-black'>7</option>
//             <option value="8" className='text-black'>8</option>
//           </select>
//         </form>
//         <div className='race-track p-3 pt-0' >
//           {
//             players.map((player, index) => (
//               <div key={index} className='position-relative track m-3 winner-card'>
//                 <input index={index} style={{ width: 100, border: `2px solid ${player.color}` }} value={player.name} onChange={nameEnter} ></input>
//                 <i className='fa-solid fa-dog position-absolute' style={{ height: player.height, width: 100, fontSize: 38, color: player.color, left: player.left }}></i>
//                 <div className='position-absolute ' style={{ top: 0, left: window.innerWidth - 200, border: '1px solid black', height: 50 }}></div>
//               </div>
//             ))
//           }
//         </div>
//         <button className='col-4 btn btn-primary' type='submit' onClick={onStart} >Start Race</button>
//       </div>

//     </>
//   );
// }
