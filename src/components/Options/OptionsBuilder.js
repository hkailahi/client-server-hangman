import React from 'react';
import OptionsRow from './OptionsRow'

const OptionsBuilder = (props) => (
  <div className="OptionsTop">
    <OptionsRow row={qwertyTopChars()} clickedletter={props.clickedletter} addClass=""/>
    <OptionsRow row={qwertyMidChars()} clickedletter={props.clickedletter} addClass=" mid"/>
    <OptionsRow row={qwertyBottomChars()} clickedletter={props.clickedletter} addClass=" end"/>
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

export default OptionsBuilder;
