import React from 'react';

const WordBuilder = (props) => (
  <div className="Word">
    <h1>Word</h1>
    <section className="char-row">
      {props.word.map((x) => <div className="char one"> </div>)}
    </section>
  </div>
);

export default WordBuilder;
