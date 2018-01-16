import React, { Component } from 'react';
import WordBuilder from './WordBuilder/WordBuilder';
import OptionsBuilder from './OptionsBuilder/OptionsBuilder'
import Layout from './Layout/Layout';

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

// function qwertyTopChars() {
//   return "qwertyuiop".split('');
// }
//
// function qwertyMidChars() {
//   return "asdfghjkl".split('');
// }
//
// function qwertyBottomChars() {
//   return "zxcvbnm".split('');
// }

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            word: "",
            uniqueChars: [],
            letters: genCharArray('a','z'),
            available: genCharArray('a','z'),
            lettersTop: [],
            lettersMid: [],
            lettersBottom: [],
            guessableList: []
        }
    }

    componentDidMount() {
        // fetch("/newgame").then(() => {
        //     return fetch("/game");
        //   }).then((response) => {
        //     return response.json();
        //   }).then((data) => {
        //     const guessables = [];
        //     data.guesses.map((d) => guessables.push(d.answer));
        //     const newWord = guessables.toString()
        //     this.setState({
        //         guessableList: guessables,
        //         word: newWord
        //     })
        //   }).catch((error) => {
        //     console.log(error);
        //   });

        this.setState({ word: "hello" })
    }

    render() {
    return (
      <div>
        <Layout>
            <h1>Hangingman</h1>
            <WordBuilder
              word={this.state.word}
            ></WordBuilder>
            <OptionsBuilder
              top={this.state.lettersTop}
              mid={this.state.lettersMid}
              bottom={this.state.lettersBottom}
            ></OptionsBuilder>
            <h1>Stats</h1>
            <h3>{this.state.word}</h3>
        </Layout>
      </div>
    );
  }
}

export default App;
