import React from 'react';

const OptionsBuilder = (props) => (
  <div className="OptionsTop">
    <h1>Options</h1>
    <section class="key-row">
      {props.top.map((x) => <button className="key one">{x}</button>)}
    </section>
    <section class="key-row mid">
      {props.mid.map((x) => <button className="key one">{x}</button>)}
    </section>
    <section class="key-row end">
      {props.bottom.map((x) => <button className="key one">{x}</button>)}
    </section>
  </div>
);

export default OptionsBuilder;
