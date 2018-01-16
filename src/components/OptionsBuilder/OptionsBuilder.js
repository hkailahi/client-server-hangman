import React, {Component} from 'react';

function qwertyTopChars() {
  return "qwertyuiop".split('');
}

function qwertyMidChars() {
  return "asdfghjkl".split('');
}

function qwertyBottomChars() {
  return "zxcvbnm".split('');
}

class OptionsBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: qwertyTopChars(),
      mid: qwertyMidChars(),
      bottom: qwertyBottomChars()
    }
  }

  render() {
    return (
      <div className="OptionsTop">
        <h1>Options</h1>
        <section className="key-row">
          {this.state.top.map((letter) => <button key={letter} className="key one">{letter}</button>)}
        </section>
        <section className="key-row mid">
          {this.state.mid.map((letter) => <button key={letter} className="key one">{letter}</button>)}
        </section>
        <section className="key-row end">
          {this.state.bottom.map((letter) => <button key={letter} className="key one">{letter}</button>)}
        </section>
      </div>
    )
  }
}

export default OptionsBuilder;
