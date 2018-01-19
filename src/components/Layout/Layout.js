import React from 'react';
import GameState from './GameState'

const Layout = ( props ) => (
  <React.Fragment>
    <div className="Layout"></div>
    <GameState gamestate={props.gamestate} newgamehandler={props.newgamehandler}/>
    <main className="Content">
      {props.children}
    </main>
  </React.Fragment>
);

export default Layout;
