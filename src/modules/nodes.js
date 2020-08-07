import { getNodes } from '../parseInput';

const CREATE_NODE = 'node/CREATE';
const REMOVE_NODE = 'node/REMOVE';

let nextId = 1;
export const addNode = name => ({
  type: CREATE_NODE,
  payload: {
    id: nextId++,
    name: name
  }
});
export const removeNode = id => ({
  type: REMOVE_NODE,
  payload: id
});

function nodes(state = getNodes(), action) {
  switch (action.type) {
    case CREATE_NODE:
      return [];
    case REMOVE_NODE:
      return state.filter(
        node => node.realId !== action.payload
      )
    default:
      return state;
  }
}

export default nodes;