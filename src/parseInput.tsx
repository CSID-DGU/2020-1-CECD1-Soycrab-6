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
    id: `${node.id}`,
    traceVars: node.traceVars,
    events: node.events,
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