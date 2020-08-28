import initialJson from './data/sample.json';
import { Node, Edge, Event } from './export';

class CustomNode extends Node {
  constructor({ ...node }) {
    super(node);
    this.realId = parseInt(node.id, 10);
    this.name = `${node.id}번 노드`;
  };
};

class CustomEdge extends Edge {
  constructor({ ...edge }) {
    super(edge);
    this.realId = parseInt(edge.id, 10);
    this.name = `${edge.id}번 노드`;
  };
};

class CustomEvent extends Event {
  
};

const parseArrByInsertIds = (objArr, parentId = null, parentName = null) => {
  if (parentName && objArr && objArr.length > 0) {
    return objArr.map((obj, index) => ({
      realId: index,
      parentType: parentName,
      parentId: parentId,
      ...obj
    }));
  } else if (objArr) {
    return objArr.map((obj, index) => ({
      ...obj,
      realId: index
    }));
  };
};

const parseNodes = (nodes, filterId) => {
  return nodes.map(node => ({
    id: `${node.id}`,
    name: `${node.id}번 노드`,
    productPrefix: node.productPrefix,
    realId: node.id,
    filterId: filterId,
    traceVars: node.traceVars,
    isEnd: node.isEnd,
    alias: {
      realId: node.id,
      name: `node의 ${node.id}번째 Alias`,
      events: parseArrByInsertIds(node.events, node.id, 'node')
    }
  }));
};

const getNodes = () => {
  const inputJson = initialJson;
  return parseNodes(inputJson.nodes, null);
};

const getEdges = () => {
  const inputJson = initialJson;
  return inputJson.edges.map((edge, index) => ({
    filterId: null,
    productPrefix: edge.productPrefix,
    source: `${edge.fromId}`,
    target: `${edge.toId}`,
    propagators: edge.propagators.map((propagator, _index) => ({
      ...propagator,
      realId: _index,
      edgeId: index,
      alias: {
        realId: index,
        name: `propagator의 ${index}번째 Alias`,
        events: parseArrByInsertIds(propagator.events, index, 'propagator')
      },
      events: null
    })),
    filter: {
      ...edge.filter,
      realId: index,
      edgeId: index,
      nodes: parseNodes(edge.filter.nodes, index),
      edges: edge.filter.edges.map(edge => ({
        ...edge,
        source: `${edge.fromId}`,
        target: `${edge.toId}`,
        filterId: index
      }))
    }
  }));
};

export const getRawData = () => {
  return initialJson;
};

export const getData = () => {
  return {
    nodes: getNodes(),
    links: getEdges()
  };
};