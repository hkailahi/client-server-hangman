import React, {Component} from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wins: 0,
      losses: 0,
      correct: 0,
      incorrect: 0
    }

    this.fetchStats = this.fetchStats.bind(this);
  }

  fetchStats() {
    fetch("/stats").then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        wins: data.wins,
        losses: data.losses,
        correct: data.correct,
        incorrect: data.incorrect,
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.fetchStats();
  }

  render () {
    return (
      <div>
        <h1>Your Stats:</h1>
        <h2>{"Wins: " + this.state.wins}</h2>
        <h2>{"Losses: " + this.state.losses}</h2>
        <h2>{"Correct: " + this.state.correct}</h2>
        <h2>{"Incorrect: " + this.state.incorrect}</h2>
      </div>
    );
  }
}

export default Stats;
