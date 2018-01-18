import React from 'react';

const layout = ( props ) => (
  <React.Fragment>
    <div className="Layout"></div>
    <GameState gamestate={props.gamestate} newgamehandler={props.newgamehandler}/>
    <main className="Content">
      {props.children}
    </main>
  </React.Fragment>
);

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

const NewGame = (props) => (
  <button className="new-game" onClick={props.newgamehandler}>New Game?</button>
);

export default layout;
