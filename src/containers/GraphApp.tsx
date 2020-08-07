import React from 'react';
import { getNodes, getEdges } from '../parseInput';
import { Graph } from 'react-d3-graph';
import Node from '../components/Node';

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
    size: 2500,
    renderLabel: false,
    viewGenerator: (node: any) => {
      return (
        <Node node={node} />
      );
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