import React from "react";

const AccumStats = props => (
  <div>
    <h1>Your Stats:</h1>
    <h2>{"Wins: " + props.wins}</h2>
    <h2>{"Losses: " + props.losses}</h2>
  </div>
);

export default AccumStats;
