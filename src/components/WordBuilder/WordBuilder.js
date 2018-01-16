import React from 'react';
import shortid from 'shortid';

const WordBuilder = (props) => (
  <div className="Word">
    <h1>Word</h1>
    <section className="char-row">
      {props.word.split("").map((opt) => <div key={shortid.generate()} className="char one"> </div>)}
    </section>
  </div>
);

export default WordBuilder;
