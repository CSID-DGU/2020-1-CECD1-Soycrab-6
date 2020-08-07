import React from 'react';
import './App.scss';
import NodeApp from './containers/NodeApp';
import HeadNavbar from './components/HeadNavbar';
// import { Graph } from "react-d3-graph";

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
