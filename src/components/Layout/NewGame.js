import React from "react";

const NewGame = props => (
  <button className="new-game" onClick={props.newgamehandler}>
    New Game?
  </button>
);

export default NewGame;
