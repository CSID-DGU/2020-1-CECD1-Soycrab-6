import React from 'react';
import './App.scss';
import NodeApp from './containers/NodeApp';
import HeadNavbar from './components/HeadNavbar';
import { getNodes, getEdges } from '../src/parseInput';
import { Graph } from 'react-d3-graph';

const graphData = {
  nodes: getNodes(),
  links: getEdges()
};

const graphConfig = {
  nodeHighlightBehavior: true,
  width: 2000,
  height: 1000,
  d3: {
    alphaTarget: 0.05,
    gravity: 100,
    linkLength: 200,
    linkStrength: 1,
    disableLinkForce: false
  },
  node: {
      color: '#059900',
      size: 3000,
      highlightStrokeColor: 'blue',
      symbolType: 'square',
      fontSize: 17,
      fontWeight: 'bold',
      fontColor: 'black',
      labelProperty: (node: any) => {
        return `[${node.id}번 노드] 추적 변수: [${node.traceVars.join(', ')}]`;
      }
  },
  link: {
      highlightColor: '#045227',
  }
};

function App() {
  return (
    <>
      <HeadNavbar />
      <Graph
        id="graph-id"
        data={graphData}
        config={graphConfig}
      />;
    </>
  );
}

export default App;
