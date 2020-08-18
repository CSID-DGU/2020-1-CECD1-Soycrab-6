import { getData } from '../parseInput';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));
const pushInnerFromAlias = (objArr, objName, boxArr) => new Promise(resolve => {
  objArr.map(obj => {
    if (obj.alias && obj.alias[objName]) {
      obj.alias[objName].map(innerObj => boxArr.push(innerObj));
    };
  });
  return resolve();
});
const data = getData();
const sleepTime = 250;

export const callData = async () => {
  await sleep(sleepTime);
  return data;
};

export const callNodeById = async realId => {
  let nodeList = [];
  nodeList = nodeList.concat(data.nodes);
  data.links.map(edge => {
    nodeList = nodeList.concat(edge.filter.nodes)
  });

  const node = nodeList.find(node => node.realId === realId);
  await sleep(sleepTime);
  return node;
};

export const callEdgeById = async ({ fromId, toId }) => {
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
  })

  console.log(edges)

  const edge = edges.find(edge => 
    parseInt(edge.source, 10) === fromId && 
    parseInt(edge.target, 10) === toId
  ); 

  await sleep(sleepTime);
  return edge;
};

export const callAliasById = async ({ name }) => {
  let allAliases = [];

  data.nodes.map(node => allAliases.concat(node.alias));
  data.links.map(node => allAliases.concat(node.alias));

  await sleep(sleepTime);
  return allAliases.find(alias => alias.name === name);
};

export const callEventById = async ({ realId, parentType, parentId }) => {
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
  let filters = [];
  data.links.map(edge => filters.push(edge.filter));

  await sleep(sleepTime);
  return filters.find(
    filter => 
      filter.realId === realId && 
      filter.edgeId === edgeId
  ); 
};