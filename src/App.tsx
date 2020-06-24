import React from 'react';
import './App.scss';
import NodeApp from './containers/NodeApp';
import HeadNavbar from './components/HeadNavbar';

function App() {
  return (
    <>
      <HeadNavbar />
      <div className="container">
        <NodeApp />
      </div>
    </>
  );
}

export default App;
