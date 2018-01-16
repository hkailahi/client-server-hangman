import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
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

function qwertyTopChars() {
  return "qwertyuiop".split('');
}

function qwertyMidChars() {
  return "asdfghjkl".split('');
}

function qwertyBottomChars() {
  return "zxcvbnm".split('');
}


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            greeting: "helloworld",
            word: ['h','e','l','l','o'],
            uniqueChars: [],
            letters: genCharArray('a','z'),
            lettersTop: qwertyTopChars(),
            lettersMid: qwertyMidChars(),
            lettersBottom: qwertyBottomChars(),
            available: genCharArray('a','z')
        }
    }

    // componentDidMount() {
    //     // ./node/npm start -> (proxy + param) = http://localhost:8080 + /greet
    //     fetch("/greet").then(function(response) {
    //         return response.text();
    //     }).then((text) => {
    //         this.setState({greeting: text});
    //     }).catch();
    // }

    render() {
    return (
      <div>
        <Layout>
          <div>
            <h1>Hangingman</h1>
            <WordBuilder
              word={this.state.greeting.split("")}
            ></WordBuilder>
          </div>
          <div>
            <OptionsBuilder
              top={this.state.lettersTop}
              mid={this.state.lettersMid}
              bottom={this.state.lettersBottom}
            ></OptionsBuilder>
          </div>
          <div>
            <h1>Stats</h1>
            <text>{this.state.greeting}</text>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
