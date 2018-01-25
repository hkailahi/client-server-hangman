import React from "react";
import shortid from "shortid";

const GuessableBuilder = props => (
  <div className="Word">
    <section className="char-row">
      {props.word.split("").map(opt => (
        <div key={shortid.generate()} className="char one">
          {opt}
        </div>
      ))}
    </section>
  </div>
);

export default GuessableBuilder;
