import { getData } from '../parseInput';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));
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

export const callEventById = async (realId, parentType, parentId) => {
  let allEvents = [];
  let paragators = [];
  data.nodes.map(node => allEvents.concat(node.events));
  data.links.map(edge => paragators.concat(edge.paragators));
  paragators.map(paragator => allEvents.concat(paragator.events));
  const event = allEvents.find(
    event => 
    event.realId === realId &&
    event.parentType === parentType &&
    event.parentId === parentId
  );
  await sleep(sleepTime);
  return event;
};