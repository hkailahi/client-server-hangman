import React from 'react';
import Option from './Option'

const OptionsRow = (props) => (
  <section className={"key-row" + props.addClass}>
    {props.row.map((letter) => <Option key={letter} letter={letter} clickedletter={props.clickedletter}/>)}
  </section>
);


export default OptionsRow;
