import React from "react";

const CurrGameStats = props => (
  <div>
    <h2>{"Correct: " + props.correct}</h2>
    <h2>{"Incorrect: " + props.incorrect}</h2>
  </div>
);

export default CurrGameStats;
