import initialJson from './data/sample.json';

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

const parseNodes = nodes => {
  return nodes.map(node => ({
    id: `${node.id}`,
    name: `${node.id}번 노드`,
    productPrefix: node.productPrefix,
    realId: node.id,
    filterId: null,
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
  return parseNodes(inputJson.nodes);
};

const getEdges = () => {
  const inputJson = initialJson;
  return inputJson.edges.map((edge, index) => ({
    filterId: null,
    productPrefix: edge.productPrefix,
    source: `${edge.fromId}`,
    target: `${edge.toId}`,
    propagators: parseArrByInsertIds(edge.propagators, index, 'edge').map(paragator => ({
      ...paragator,
      alias: {
        realId: index,
        name: `paragator의 ${index}번째 Alias`,
        events: parseArrByInsertIds(paragator.events, index, 'paragator')
      }
    })),
    filter: {
      realId: index,
      edgeId: index,
      nodes: parseNodes(edge.filter.nodes),
      edges: edge.filter.edges.map(edge => ({
        ...edge,
        source: `${edge.fromId}`,
        target: `${edge.toId}`
      }))
    }
  }));
};

export const getData = () => {
  return {
    nodes: getNodes(),
    links: getEdges()
  }
};