import React from 'react';
import { getNodes, getEdges } from '../parseInput';
import { Graph } from 'react-d3-graph';
import Node from '../components/Node';

const graphData = {
  nodes: getNodes(),
  links: getEdges()
};

const graphConfig = {
  directed: true,
  highlightOpacity: 0,
  linkHighlightBehavior: true,
  width: 1700,
  height: 1000,
  d3: {
    alphaTarget: 0.05,
    gravity: 100,
    linkLength: 500,
    linkStrength: 0.1,
    disableLinkForce: false
  },
  node: {
    size: 1500,
    renderLabel: false,
    viewGenerator: node => {
      return (
        <Node node={node} />
      );
    }
  },
  link: {
    color: '#69db7c',
    highlightColor: '#045227',
    markerWidth: 6,
    strokeWidth: 5,
    fontSize: 15,
    highlightFontSize: 17,
    highlightFontWeight: 'bold',
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

export default React.memo(GraphApp);