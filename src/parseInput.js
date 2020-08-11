import intialJson from './data/sample.json';

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

const getNodes = () => {
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

const getEdges = () => {
  const inputJson = intialJson;
  return inputJson.edges.map(edge => ({
    productPrefix: edge.productPrefix,
    source: `${edge.fromId}`,
    target: `${edge.toId}`,
    events: edge.events
  }));
};

export const getData = () => {
  return {
    nodes: getNodes(),
    links: getEdges()
  }
};