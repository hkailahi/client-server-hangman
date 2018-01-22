import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Hangman from './Hangman/Hangman';
import GuessableBuilder from './Guessable/GuessableBuilder';
import KeyboardBuilder from './Keyboard/KeyboardBuilder';
import Stats from './Stats/Stats';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            word: " ",
            guessableCorrect: [],
            selectedLetter: "",
            parts: [],
            isLoading: true,
            gamestate: "",
            wins: 0,
            losses: 0,
            correct: 0,
            incorrect: 0
        };

        this.letterClickHandler = this.letterClickHandler.bind(this);
        this.newGameClickHandler = this.newGameClickHandler.bind(this);
        this.fetchNewGame = this.fetchNewGame.bind(this);
        this.fetchGuessableAnswer = this.fetchGuessableAnswer.bind(this);
        this.fetchStats = this.fetchStats.bind(this);
        this.letterPressHandler = this.letterPressHandler.bind(this);
    }

    componentDidMount() {
        this.fetchNewGame();
        this.fetchStats();
    }

    letterClickHandler = (event) => {
      const letter = event.target.value;
      this.setState({ selectedLetter: letter });
      this.fetchGuessableAnswer(letter);
      this.fetchStats();
    }

    letterPressHandler = (event) => {
      if (this.state.gamestate === "won" || this.state.gamestate === "lost")
        return false;

      const letter = event.key;
      this.setState({ selectedLetter: letter });
      this.fetchGuessableAnswer(letter);
      this.fetchStats();
      return true;
    }

    newGameClickHandler = (event) => {
      this.setState({
        word: " ",
        guessableCorrect: [],
        selectedLetter: "",
        parts: [],
        isLoading: true,
        gamestate: ""
      });
      this.fetchNewGame();
      this.fetchStats();
    }

    fetchNewGame() {
      fetch("/newgame", { method: 'post' }).then(() => {
          return fetch("/game");
        }).then((response) => {
          return response.json();
        }).then((data) => {
          const guessCorrect = [];
          data.guesses.map((d) => guessCorrect.push(d.isGuessed));

          let newStr = "";

          for (let i=0; i<guessCorrect.length; i++) {
              newStr += " ";
          }

          this.setState({
              guessableCorrect: guessCorrect,
              word: newStr,
              isLoading: false
          });
        }).catch((error) => {
          console.log(error);
        });
    }

    fetchGuessableAnswer(letter) {
      const val = {letter: letter};

      fetch("/game", {
                        method: 'post',
                        body: JSON.stringify(val),
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
        }).then((response) => {
          return response.json();
        }).then((data) => {
          const guessCorrect = [];
          data.guesses.map((d) => guessCorrect.push(d.isGuessed));

          let newStr = "";
          let newParts = this.state.parts;
          let isChanged = false;

          for (let i=0; i<guessCorrect.length; i++) {
            if (guessCorrect[i] !== this.state.guessableCorrect[i]) {
              newStr += this.state.selectedLetter;
              isChanged = true;
            } else {
              newStr += this.state.word[i];
            }
          }

          if (!isChanged) {
            newParts.push(val.letter);
          }

          this.setState({
              guessableCorrect: guessCorrect,
              word: newStr,
              parts: newParts,
          });
          return fetch("/game/status");
        }).then((response) => {
          return response.json();
        }).then((data) => {
          let status = "";
          let currStateWord = this.state.word;

          if (data.status === "won") {
            status = "won";
          }
          else if (data.status === "lost") {
            status = "lost";
            // TODO implemnent API/backend support for the below
            currStateWord = data.word;
            // TODO last fetch should have correct word, so setState({ word: data.word}) ??
          }

          this.setState({
            gamestate: status,
            word: currStateWord
          });
        }).catch((error) => {
          console.log(error);
        });
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

    render() {
      return (
        <Layout gamestate={this.state.gamestate} newgamehandler={this.newGameClickHandler}>
            <h1>Hangman</h1>
            <Hangman parts={this.state.parts}/>
            <GuessableBuilder word={this.state.word}></GuessableBuilder>
            { this.state.isLoading ?
                <h2>Loading word...</h2>
              :
                <KeyboardBuilder clickedletter={this.letterClickHandler} pressedletter={this.letterPressHandler}/>
            }
            <Stats
              wins={this.state.wins}
              losses={this.state.losses}
              correct={this.state.correct}
              incorrect={this.state.incorrect}
            />
        </Layout>
      );
  }
}

export default App;
