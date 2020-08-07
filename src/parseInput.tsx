import intialJson from './data/sample.json';
// import { NodesType } from '../src/modules/nodes';

// export const getNodes = () => {
//   const inputJson = intialJson;
//   const defaultNodes = intialJson.nodes;
//   let filterNodes: any = [];
//   inputJson.edges.map(edge => {
//     // const addedFilterNodes = {
//     //   ...edge.filter.node,
//     //   filterId: 
//     // }
//     filterNodes = [...filterNodes, ...edge.filter.nodes];
//     return filterNodes;
//   });
//   return [...defaultNodes, ...filterNodes];
// };

// export const getEdges = () => {
//   const inputJson = intialJson;
//   return inputJson.edges;
// };

export const getNodes = () => {
  const inputJson = intialJson;
  return inputJson.nodes.map(node => ({
    productPrefix: node.productPrefix,
    id: `${node.id}`,
    realId: node.id,
    filterId: null,
    traceVars: node.traceVars,
    isEnd: node.isEnd,
    events: node.events
    // ...node
  }));
};

export const getEdges = () => {
  const inputJson = intialJson;
  return inputJson.edges.map(edge => ({
    source: `${edge.fromId}`,
    target: `${edge.toId}`,
  }));
};