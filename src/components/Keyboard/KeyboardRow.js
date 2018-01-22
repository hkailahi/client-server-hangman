import React from 'react';
import KeyButton from './KeyButton'

const KeyboardRow = (props) => (
  <section className={"key-row" + props.addClass}>
    {props.row.map((letter) => <KeyButton key={letter} letter={letter} clickedletter={props.clickedletter} pressedletter={props.pressedletter}/>, this)}
  </section>
);


export default KeyboardRow;
