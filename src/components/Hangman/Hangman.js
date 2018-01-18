import React from 'react';

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

const BodyPart = (props) => (
  <div className={getBodyParts(props.index)}></div>
);

function getBodyParts(index) {
  let bodyParts = "body-part";

  switch(index) {
    case 0:
      bodyParts += " gallow"
      break;
    case 1:
      bodyParts += " head";
      break;
    case 2:
      bodyParts += " neck";
      break;
    case 3:
      bodyParts += " corpus";
      break;
    case 4:
      bodyParts += " left-arm";
      break;
    case 5:
      bodyParts += " left-hand"
      break;
    case 6:
      bodyParts += " right-arm"
      break;
    case 7:
      bodyParts += " right-hand"
      break;
    case 8:
      bodyParts += " left-leg"
      break;
    case 9:
      bodyParts += " right-leg"
      break;
    default:
      bodyParts += "";
  }

  return bodyParts;
}

export default Hangman;
