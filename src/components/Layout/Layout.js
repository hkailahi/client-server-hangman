import React from 'react';

const layout = ( props ) => (
  <React.Fragment>
    <div className="Layout"></div>
    <main className="Content">
      {props.children}
    </main>
  </React.Fragment>
);

export default layout;
