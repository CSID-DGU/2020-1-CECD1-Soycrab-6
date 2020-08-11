import { getData } from '../parseInput';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));
const data = getData();

export const callNodeById = async id => {
  const node = data.nodes.find(node => node.id === id);
  await sleep(500);
  return node;
};

export const callData = async () => {
  await sleep(500);
  return data;
};