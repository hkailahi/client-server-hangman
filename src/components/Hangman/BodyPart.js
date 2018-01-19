import React from 'react';

const BodyPart = (props) => (
  <div className={getBodyParts(props.index)}></div>
);

function getBodyParts(index) {
  let bodyPart = "body-part";

  switch(index) {
    case 0:
      bodyPart += " gallow"
      break;
    case 1:
      bodyPart += " head";
      break;
    case 2:
      bodyPart += " neck";
      break;
    case 3:
      bodyPart += " corpus";
      break;
    case 4:
      bodyPart += " left-arm";
      break;
    case 5:
      bodyPart += " left-hand"
      break;
    case 6:
      bodyPart += " right-arm"
      break;
    case 7:
      bodyPart += " right-hand"
      break;
    case 8:
      bodyPart += " left-leg"
      break;
    case 9:
      bodyPart += " right-leg"
      break;
    default:
      bodyPart += "";
  }

  return bodyPart;
}

export default BodyPart;
