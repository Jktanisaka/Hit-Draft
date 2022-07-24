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
      winners: [],
      numberOfPlayers: 0

    };
  }

  onStart(props) {
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
    const colors = ['blue', ' red', 'black', 'green', 'gray', 'yellow', 'purple', 'orange'];
    const players = [];
    for (let i = 0; i < event.target.value; i++) {
      players.push({ player: i + 1, left: 100, height: 0, color: colors[i], name: '' });

    }
    this.setState({ players });
    this.setState({ numberOfPlayers: event.target.value });
  }

  nameEnter(event) {
  }

  render(props) {
    if (parseInt(this.state.winners.length) === parseInt(this.state.numberOfPlayers)) {
      clearInterval(this.state.intervalID);
    }
    return (
      <div className='container-fluid row justify-content-center m-0'>
        <form>
          <label htmlFor="players">Number of Players</label>
          <select id='players' onChange={this.selectChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </form>
        <div className='race-track'>
          {
            this.state.players.map((player, index) => (
              <div key={index} className='position-relative track m-3'>
                <input style={{ width: 100 }} onChange={this.nameEnter}></input>
                <i className='fa-solid fa-dog position-absolute' style={{ height: player.height, width: 100, fontSize: 38, color: player.color, left: player.left }}>
                </i>
              </div>
            ))

          }
        </div>
        <button className='col-4' type='submit' onClick={this.onStart}>Start Race</button>
      </div>
    );
  }
}
