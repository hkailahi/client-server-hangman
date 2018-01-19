import React from 'react';

const Stats = (props) => (
  <div>
    <h1>Your Stats:</h1>
    <h2>{"Wins: " + props.wins}</h2>
    <h2>{"Losses: " + props.losses}</h2>
    <h2>{"Correct: " + props.correct}</h2>
    <h2>{"Incorrect: " + props.incorrect}</h2>
  </div>
);

export default Stats;
