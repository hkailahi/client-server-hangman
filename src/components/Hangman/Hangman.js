import React from 'react';
import BodyPart from './BodyPart'

const Hangman = (props) => (
  <div className="character-container">
    <div className="hangman-container">
      {props.parts.map((letter, i) => <BodyPart index={i} letter={letter}/>)}
    </div>
    <div className="wrong-letter-container">
      <h2 className="wrong-answers">Wrong</h2>
      {props.parts.map((letter) => <div className="wrong-letter">{letter}</div>)}
    </div>
  </div>
);

export default Hangman;
