import initialJson from './data/sample.json';
import { Node, Edge, Event, Filter, Propagator } from './export';

class CustomNode extends Node {
  constructor({ ...node }, filterId) {
    super(node);
    this.id = `${node.id}`;
    this.realId = parseInt(node.id, 10);
    this.filterId = filterId;
    this.name = `${node.id}번 노드`;
    this.alias = {
      realId: node.id,
      name: `node의 ${node.id}번째 Alias`,
      events: node.events.map((event, index) => new CustomEvent(event, 'Node', node.id, index))
    }
  };
};

class CustomEdge extends Edge {
  constructor({ ...edge }, filterId, _index=null) {
    super(edge);
    this.filterId = filterId;
    this.source = `${edge.fromId}`;
    this.target = `${edge.toId}`;
    this.realId = parseInt(edge.id, 10);
    this.name = `${edge.id}번 노드`;
    this.propagators = edge.propagators ? edge.propagators.map((propagator, index) => new CustomPropagator(propagator, edge.id, index)) : [];
    this.filter = edge.filter ? new CustomFilter(edge.filter, edge, _index) : {};
  };
};

class CustomEvent extends Event {
  constructor({ ...event }, parentType, parentId, realId) {
    super(event); 
    this.realId = realId;
    this.parentType = parentType;
    this.parentId = parentId;
  };
};

class CustomFilter extends Filter {
  constructor({ ...filter }, edge, realId) {
    super(filter);
    this.realId = realId;
    this.edgeId = edge.realId;
    this.nodes = filter.nodes.map(node => new CustomNode(node));
    this.edges = edge.filter ? edge.filter.edges.map(edge => new CustomEdge(edge, realId)) : {};
  };
};

class CustomPropagator extends Propagator {
  constructor({ ...propagator }, edgeId, realId, events=null) {
    super(propagator);
    this.realId = realId;
    this.edgeId = edgeId;
    this.alias = {
      realId: edgeId,
      name: `propagator의 ${realId}번째 Alias`,
      events: propagator.events.map((event, index)  => new CustomEvent(event, 'Propagator', realId, index))
    };
    this.events = events;
  };
};

const getNodes = () => {
  const inputJson = initialJson;
  return inputJson.nodes.map(node => new CustomNode(node, null));
};

const getEdges = () => {
  const inputJson = initialJson;
  return inputJson.edges.map((edge, index) => new CustomEdge(edge, null, index));
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

// const parseArrByInsertIds = (objArr, parentId = null, parentName = null) => {
//   if (parentName && objArr && objArr.length > 0) {
//     return objArr.map((obj, index) => ({
//       realId: index,
//       parentType: parentName,
//       parentId: parentId,
//       ...obj
//     }));
//   } else if (objArr) {
//     return objArr.map((obj, index) => ({
//       ...obj,
//       realId: index
//     }));
//   };
// };

// const parseNodes = (nodes, filterId) => {
//   return nodes.map(node => ({
//     id: `${node.id}`,
//     name: `${node.id}번 노드`,
//     productPrefix: node.productPrefix,
//     realId: node.id,
//     filterId: filterId,
//     traceVars: node.traceVars,
//     isEnd: node.isEnd,
//     alias: {
//       realId: node.id,
//       name: `node의 ${node.id}번째 Alias`,
//       events: parseArrByInsertIds(node.events, node.id, 'node')
//     }
//   }));
// };

// const parseNodes = (nodes, filterId) => {
//   return nodes.map(node => new CustomNode(node));
// };

  // return inputJson.edges.map((edge, index) => ({
  //   filterId: null,
  //   productPrefix: edge.productPrefix,
  //   source: `${edge.fromId}`,
  //   target: `${edge.toId}`,
  //   propagators: edge.propagators.map((propagator, _index) => new CustomPropagator(propagator, index, _index)),
  //   filter: {
  //     ...edge.filter,
  //     realId: index,
  //     edgeId: index,
  //     nodes: parseNodes(edge.filter.nodes, index),
  //     edges: edge.filter.edges.map(edge => ({
  //       ...edge,
  //       source: `${edge.fromId}`,
  //       target: `${edge.toId}`,
  //       filterId: index
  //     }))
  //   }
  // }));
// };

// {
//   ...propagator,
//   realId: _index,
//   edgeId: index,
//   alias: {
//     realId: index,
//     name: `propagator의 ${index}번째 Alias`,
//     events: parseArrByInsertIds(propagator.events, index, 'propagator')
//   },
//   events: null
// }