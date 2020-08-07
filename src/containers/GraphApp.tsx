import React from 'react';
import { getNodes, getEdges } from '../parseInput';
import { Graph } from 'react-d3-graph';

const graphData = {
  nodes: getNodes(),
  links: getEdges()
};

const graphConfig = {
  linkHighlightBehavior: true,
  width: 1700,
  height: 1000,
  d3: {
    alphaTarget: 0.05,
    gravity: 100,
    linkLength: 250,
    linkStrength: 1,
    disableLinkForce: false
  },
  node: {
    color: '#059900',
    size: 3000,
    highlightStrokeColor: '#69db7c',
    symbolType: 'square',
    fontSize: 16,
    fontColor: 'black',
    highlightFontSize: 17,
    highlightFontWeight: 'bold',
    labelProperty: (node: any) => {
      return `[${node.id}번 노드] 추적 변수: [${node.traceVars.join(', ')}]`;
    }
  },
  link: {
    highlightColor: '#045227',
    highlightFontSize: 17,
    highlightFontWeight: 'bold'
  }
};

function GraphApp() {
  return (
    <Graph
      id="graph-id"
      data={graphData}
      config={graphConfig}
    />
  );
};

export default GraphApp;