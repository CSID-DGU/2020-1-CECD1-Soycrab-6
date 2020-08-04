import intialJson from './data/sample.json';

export const getNodes = () => {
  const inputJson = intialJson;
  const defaultNodes = intialJson.nodes;
  let filterNodes: any = [];
  inputJson.edges.map(edge => {
    filterNodes = [...filterNodes, ...edge.filter.nodes];
    return filterNodes;
  });
  return [...defaultNodes, ...filterNodes];
};

export const getEvents = () => {
  
};