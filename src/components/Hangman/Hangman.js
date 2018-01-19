import React from 'react';
import BodyPart from './BodyPart'
import shortid from 'shortid';

const Hangman = (props) => (
  <div className="character-container">
    <div className="hangman-container">
      {props.parts.map((letter, i) => <BodyPart key={shortid.generate()} index={i} letter={letter}/>)}
    </div>
    <div className="wrong-letter-container">
      <h2 className="wrong-answers">Wrong</h2>
      {props.parts.map((letter) => <div key={shortid.generate()} className="wrong-letter">{letter}</div>)}
    </div>
  </div>
);

export default Hangman;
