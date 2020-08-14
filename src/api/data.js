import { getData } from '../parseInput';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));
const pushInner = (objArr, objName, boxArr) => new Promise(resolve => {
  objArr.map(obj => {
    if (obj[objName]) {
      obj[objName].map(innerObj => boxArr.push(innerObj));
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

export const callEventById = async ({ realId, parentType, parentId }) => {
  let allEvents = [];
  let propagators = [];

  await pushInner(data.nodes, 'events', allEvents);
  await pushInner(data.links, 'propagators', propagators);
  await pushInner(propagators, 'events', allEvents);

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

export const callEdgeById = async ({ realId, filterId }) => {
  let edges = data.links;

  if (filterId) {
    
  } else {
    return edges.find(edge => edge.realId === realId); 
  };
};