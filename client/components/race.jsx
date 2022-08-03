import React from 'react';
import _ from 'lodash';
import { Navigate } from 'react-router-dom';
export default class Race extends React.Component {
  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
    this.selectChangeHandler = this.selectChangeHandler.bind(this);
    this.nameEnter = this.nameEnter.bind(this);
    this.raceRef = React.createRef();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      players: [],
      winners: [['Name', '1st Pick', '2nd Pick', '3rd Pick', '4th Pick', '5th Pick', '6th Pick', '7th Pick', '8th Pick', '9th Pick', '10th Pick', 'Additional Notes']],
      numberOfPlayers: 0,
      numberOfWinners: 0
    };
  }

  onStart(props) {
    const trackWidth = this.raceRef.current.clientWidth;
    this.setState({ winners: [['Name', '1st Pick', '2nd Pick', '3rd Pick', '4th Pick', '5th Pick', '6th Pick', '7th Pick', '8th Pick', '9th Pick', '10th Pick', 'Additional Notes']] });
    const intervalID = setInterval(
      () => {
        const copyPlayerArr = [...this.state.players];
        const copyWinnersArr = [...this.state.winners];
        const comparativePlayerArr = [];
        for (let i = 0; i < copyPlayerArr.length; i++) {
          if (copyPlayerArr[i].left < trackWidth * 0.85) {
            comparativePlayerArr.push(copyPlayerArr[i]);
          }
        }
        const randomPlayer = _.sample(comparativePlayerArr);
        randomPlayer.left = randomPlayer.left + 100;

        if (randomPlayer.left > trackWidth * 0.85) {
          copyWinnersArr.push([randomPlayer.name, '', '', '', '', '', '', '', '', '', '', '']);
          this.setState({ numberOfWinners: this.state.numberOfWinners + 1 });
        }
        this.setState({ players: copyPlayerArr });
        this.setState({ winners: copyWinnersArr });
        this.setState({ intervalID });
      }, 1000
    );

  }

  componentDidMount(props) {
    const storedWinners = JSON.parse(localStorage.getItem('winners'));
    this.setState({ winners: storedWinners });
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
    if (localStorage.getItem('winners')) {
      return <Navigate to='/results' state={this.state.winners} />;
    }
    if (this.state.numberOfWinners !== 0 && parseInt(this.state.numberOfWinners) === parseInt(this.state.numberOfPlayers)) {
      clearInterval(this.state.intervalID);
      return <Navigate to='/results' state={this.state.winners} />;
    }

    return (
      <>
      <div className='container-fluid row justify-content-center align-items-center m-0'>
        <form className='d-flex flex-column justify-content-center align-items-center'>
          <label htmlFor="players" style={{ fontSize: 28 }} className='m-3'>Number of Players</label>
          <select id='players' onChange={this.selectChangeHandler} defaultValue = ''className='w-25 form-control col-4 text-muted'>
            <option value='' className='text-muted' disabled >How many people are drafting?</option>
            <option value="2" className='text-black'>2</option>
            <option value="3" className='text-black'>3</option>
            <option value="4" className='text-black'>4</option>
            <option value="5" className='text-black'>5</option>
            <option value="6" className='text-black'>6</option>
            <option value="7" className='text-black'>7</option>
            <option value="8" className='text-black'>8</option>
          </select>
        </form>
        <div className='race-track p-3 pt-0' ref={this.raceRef} >
          {
            this.state.players.map((player, index) => (
              <div key={index} className='position-relative track m-3' style={{ animation: `animate-fade ${(index / 2)}s ease-in` }}>
                <input index={index} style={{ width: 100, border: `2px solid ${player.color}` }} value={player.name} onChange={this.nameEnter} ></input>
                <i className='fa-solid fa-dog position-absolute' style={{ height: player.height, width: 100, fontSize: 38, color: player.color, left: player.left }}></i>
                <div className='position-absolute ' style={{ top: 0, left: this.raceRef.current.clientWidth * 0.85, border: '1px solid black', height: 50 }}></div>
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
