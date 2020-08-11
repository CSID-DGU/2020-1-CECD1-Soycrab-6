import { getData } from '../parseInput';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));
const data = getData();

export const callData = async () => {
  await sleep(250);
  return data;
};

export const callNodeById = async id => {
  const node = data.nodes.find(node => node.realId === id);
  await sleep(250);
  return node;
};