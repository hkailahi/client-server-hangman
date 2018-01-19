import React from 'react';
import NewGame from './NewGame'

const GameState = (props) => (
  <div>
      {(props.gamestate === "won") ?
        <div className="green-foreground"></div>
        :
        ((props.gamestate === "lost") ?
          <div className="red-foreground"></div>
          :
          <div></div>
        )
      }
      {(props.gamestate === "won") ?
        <div className="won">You won!</div>
        :
        ((props.gamestate === "lost") ?
          <div className="lost">Game over!</div>
          :
          <div></div>
        )
      }
      {(props.gamestate === "won" || props.gamestate === "lost") ?
          <NewGame newgamehandler={props.newgamehandler}/>
        :
          <div></div>
      }
  </div>
);

export default GameState;
