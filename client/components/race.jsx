import React from 'react';
import _ from 'lodash';
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
      return (
        <div className='d-flex justify-content-evenly align-items-center'>
          {
            this.state.winners.map((player, index) => (
              <div key={index} className='col-2 d-flex flex-column' style={{ animation: `fade-in ${index + 1}s` }} >
                <p className='text-center' style={{ fontSize: 20 }}>{player.name}(#{index + 1})</p>
                <form className='row justify-content-center'>
                  <input style={{ width: '80%' }} placeholder="1st Pick"></input>
                  <input style={{ width: '80%' }} placeholder="2nd Pick"></input>
                  <input style={{ width: '80%' }} placeholder="3rd Pick"></input>
                  <input style={{ width: '80%' }} placeholder="4th Pick"></input>
                  <input style={{ width: '80%' }} placeholder="5th Pick"></input>
                  <input style={{ width: '80%' }} placeholder="6th Pick"></input>
                  <input style={{ width: '80%' }} placeholder="7th Pick"></input>
                  <input style={{ width: '80%' }} placeholder="8th Pick"></input>
                  <input style={{ width: '80%' }} placeholder="9th Pick"></input>
                  <input style={{ width: '80%' }} placeholder="10th Pick"></input>
                  <textarea style={{ width: '80%' }} placeholder='Additional Notes'></textarea>
                </form>
              </div>

            ))
          }

        </div>
      );
    }
    return (
      <>
      <div className='container-fluid row justify-content-center align-items-center m-0'>
        <form className='d-flex flex-column justify-content-center align-items-center'>
          <label htmlFor="players">Number of Players</label>
          <select id='players' onChange={this.selectChangeHandler} className='w-25 form-control col-4'>
            <option value='' className='text-muted' selected disabled >How many people are drafting?</option>
            <option value="1" tabIndex={1}>1</option>
            <option value="2" tabIndex={2}>2</option>
            <option value="3" tabIndex={3}>3</option>
            <option value="4" tabIndex={4}>4</option>
            <option value="5" tabIndex={5}>5</option>
            <option value="6" tabIndex={6}>6</option>
            <option value="7" tabIndex={7}>7</option>
            <option value="8" tabIndex={8}>8</option>
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
