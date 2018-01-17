import React, { Component } from 'react';
import Layout from './Layout/Layout';
import GuessableBuilder from './Guessable/GuessableBuilder';
import OptionsBuilder from './Options/OptionsBuilder'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            word: " ",
            guessableList: [],
            guessableCorrect: [],
            clickedLetter: ""
        }

        this.letterClickHandler = this.letterClickHandler.bind(this);
        this.fetchNewGame = this.fetchNewGame.bind(this);
        this.fetchGuessableAnswer = this.fetchGuessableAnswer.bind(this);
    }

    componentDidMount() {
        this.fetchNewGame();
    }

    fetchNewGame() {
      console.log("Fetching from /newgame...");
      fetch("/newgame").then(() => {
          console.log("Response from /newgame.");
          console.log("GET word from /game...");
          return fetch("/game");
        }).then((response) => {
          console.log("GET successful. Word recieved from /game.");
          return response.json();
        }).then((data) => {
          const guessables = [], guessCorrect = [];
          data.guesses.map((d) => guessables.push(d.answer));
          data.guesses.map((d) => guessCorrect.push(d.isGuessed));

          let newStr = "";

          for (let i=0; i<guessCorrect.length; i++) {
              newStr += " ";
          }

          this.setState({
              guessableList: guessables,
              guessableCorrect: guessCorrect,
              word: newStr
          });
          console.log("Component mounted. Fetch complete.")
        }).catch((error) => {
          console.log(error);
        });
    }

    fetchGuessableAnswer(letter) {
      const val = {letter: letter};

      console.log("Trying to PUT { \"letter\": \"" + letter + "\" }to /game...");

      fetch("/game", {
                        method: 'put',
                        body: JSON.stringify(val),
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
        }).then((response) => {
          console.log("PUT successful.");
          return response.json();
        }).then((data) => {
          const guessCorrect = [];
          data.guesses.map((d) => guessCorrect.push(d.isGuessed));

          let newStr = "";

          for (let i=0; i<guessCorrect.length; i++) {
            if (guessCorrect[i] !== this.state.guessableCorrect[i]) {
              newStr += this.state.clickedLetter;
            } else {
              newStr += this.state.word[i];
            }
          }

          this.setState({
              guessableCorrect: guessCorrect,
              word: newStr
          });
        }).catch((error) => {
          console.log(error);
        });
    }

    letterClickHandler = (event) => {
      const letter = event.target.value;
      this.setState({ clickedLetter: letter });
      this.fetchGuessableAnswer(letter);
    }

    render() {
    return (
      <div>
        <Layout>
            <h1>Hangingman</h1>
            <GuessableBuilder word={this.state.word}></GuessableBuilder>
            <OptionsBuilder clickedletter={this.letterClickHandler}/>
            <h1>Stats</h1>
            <h3>{this.state.word}</h3>
        </Layout>
      </div>
    );
  }
}

export default App;
