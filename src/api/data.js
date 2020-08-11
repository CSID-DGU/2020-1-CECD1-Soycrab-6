import { getData } from '../parseInput';

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const callData = async () => {
  const data = getData();
  await sleep(500);
  return data;
};

// export const callNodeById = async id => {
//   await sleep(500);
//   return nodes.find(node => node.id === id);
// };