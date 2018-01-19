import React from 'react';
import KeyboardRow from './KeyboardRow'

const KeyboardBuilder = (props) => (
  <div className="OptionsTop">
    <KeyboardRow row={qwertyTopChars()} clickedletter={props.clickedletter} addClass=""/>
    <KeyboardRow row={qwertyMidChars()} clickedletter={props.clickedletter} addClass=" mid"/>
    <KeyboardRow row={qwertyBottomChars()} clickedletter={props.clickedletter} addClass=" end"/>
  </div>
);

function qwertyTopChars() {
  return "qwertyuiop".split('');
}

function qwertyMidChars() {
  return "asdfghjkl".split('');
}

function qwertyBottomChars() {
  return "zxcvbnm".split('');
}

export default KeyboardBuilder;
