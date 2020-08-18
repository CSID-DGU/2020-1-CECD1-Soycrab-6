const sleep = n => new Promise(resolve => setTimeout(resolve, n));
const pushInnerFromAlias = (objArr, objName, boxArr) => new Promise(resolve => {
  objArr.map(obj => {
    if (obj.alias && obj.alias[objName]) {
      obj.alias[objName].map(innerObj => boxArr.push(innerObj));
    };
  });
  return resolve();
});
const sleepTime = 250;
const parseData = () => {
  return JSON.parse(window.sessionStorage.data);
};
const parseRawData = () => {
  return JSON.parse(window.sessionStorage.rawData);
}

const getAllNodes = () => {
  const data = parseData();
  let nodes = [];
  nodes = nodes.concat(data.nodes);
  data.links.map(edge => nodes = nodes.concat(edge.filter.nodes));
  return nodes;
};

const getAllEdges = () => {
  const data = parseData();
  let edges = data.links;
  data.nodes.map(node => {
    if (node.filter && node.filter.edges.length > 0) {
      edges = edges.concat(node.filter.edges)
    };
  });
  data.links.map(edge => {
    if (edge.filter && edge.filter.edges.length > 0) {
      edges = edges.concat(edge.filter.edges)
    };
  });
  return edges;
};

export const callData = async () => {
  const data = parseData();
  await sleep(sleepTime);
  return data;
};

export const callNodeById = async realId => {
  const nodes = getAllNodes();

  const node = nodes.find(node => node.realId === realId);
  await sleep(sleepTime);
  return node;
};

export const callEdgeById = async ({ fromId, toId }) => {
  const edges = getAllEdges();

  const edge = edges.find(edge => 
    parseInt(edge.source, 10) === fromId && 
    parseInt(edge.target, 10) === toId
  ); 

  await sleep(sleepTime);
  return edge;
};

export const callAliasById = async ({ name }) => {
  let allAliases = [];
  const nodes = getAllNodes();
  const edges = getAllEdges();

  nodes.map(node => allAliases.concat(node.alias));
  edges.map(node => allAliases.concat(node.alias));

  await sleep(sleepTime);
  return allAliases.find(alias => alias.name === name);
};

export const callEventById = async ({ realId, parentType, parentId }) => {
  const data = parseData();
  let allEvents = [];
  let propagators = [];

  await pushInnerFromAlias(data.nodes, 'events', allEvents);
  data.links.map(edge => {
    propagators = propagators.concat(edge.propagators);
    if (edge.filter) {
      if (edge.filter.edges) {
        edge.filter.edges.map(ed => propagators = propagators.concat(ed.propagators));
      };
      pushInnerFromAlias(edge.filter.nodes, 'events', allEvents);
    };
  });
  await pushInnerFromAlias(propagators, 'events', allEvents);

  const event = allEvents.find(
    event => 
    event.realId === realId &&
    event.parentType === parentType &&
    event.parentId === parentId
  );

  await sleep(sleepTime);
  return event;
};

export const callFilterById = async ({ realId, edgeId }) => {
  const edges = getAllEdges();
  let filters = [];
  edges.map(edge => filters.push(edge.filter));

  await sleep(sleepTime);
  return filters.find(
    filter => 
      filter.realId === realId && 
      filter.edgeId === edgeId
  ); 
};

export const getPropagatorById = async ({ realId, edgeId }) => {
  const edges = getAllEdges();
  let propagators = [];

  edges.map(edge => propagators = propagators.concat(edge.propagators));
  const propagator = propagators.find(
    ppgt => 
      ppgt.realId === realId && 
      ppgt.edgeId === edgeId 
  );
  return propagator;
};

export const exportData = () => {
  return parseRawData();
};