import React from "react";
import NewGame from "./NewGame";

const GameState = props => (
  <div>
    {props.gamestate === "won" ? (
      <div className="green-foreground" />
    ) : props.gamestate === "lost" ? (
      <div className="red-foreground" />
    ) : (
      <div />
    )}
    {props.gamestate === "won" ? (
      <div className="won">You won!</div>
    ) : props.gamestate === "lost" ? (
      <div className="lost">Game over!</div>
    ) : (
      <div />
    )}
    {props.gamestate === "won" || props.gamestate === "lost" ? (
      <NewGame newgamehandler={props.newgamehandler} />
    ) : (
      <div />
    )}
  </div>
);

export default GameState;
