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

const getNodes = () => {
  const inputJson = intialJson;
  return inputJson.nodes.map(node => ({
    id: `${node.id}`,
    productPrefix: node.productPrefix,
    realId: node.id,
    filterId: null,
    traceVars: node.traceVars,
    isEnd: node.isEnd,
    events: parseArrByInsertIds(node.events, node.id, 'node')
  }));
};

const getEdges = () => {
  const inputJson = intialJson;
  return inputJson.edges.map((edge, index) => ({
    realId: index,
    productPrefix: edge.productPrefix,
    source: `${edge.fromId}`,
    target: `${edge.toId}`,
    propagators: parseArrByInsertIds(edge.propagators, index, 'edge').map(paragator => ({
      ...paragator,
      events: parseArrByInsertIds(paragator.events, index, 'paragator')
    })),
    filter: edge.filter
  }));
};

export const getData = () => {
  return {
    nodes: getNodes(),
    links: getEdges()
  }
};