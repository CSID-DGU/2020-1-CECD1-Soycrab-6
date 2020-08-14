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
  const node = data.nodes.find(node => node.realId === realId);
  await sleep(sleepTime);
  return node;
};

export const callEdgeById = async ({ fromId, toId }) => {
  const edges = data.links;

  await sleep(sleepTime);
  return edges.find(edge => 
    parseInt(edge.source, 10) === fromId && 
    parseInt(edge.target, 10) === toId
  ); 
};

export const callAliasById = async ({ name }) => {
  let allAliases = [];

  data.nodes.map(node => allAliases.concat(node.alias));
  data.links.map(node => allAliases.concat(node.alias));

  return allAliases.find(alias => alias.name === name);
};

export const callEventById = async ({ realId, parentType, parentId }) => {
  let allEvents = [];
  let propagators = [];

  await pushInnerFromAlias(data.nodes, 'events', allEvents);
  await pushInnerFromAlias(data.links, 'propagators', propagators);
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

export const callFilterById = async (realId) => {
  let filters = [];
  data.links.map(edge => filters.concat(edge.filter));

  return filters.find(filter => filter.realId === realId); 
};