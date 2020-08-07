import { EventType } from './events';
// import { getNodes } from '../parseInput';

const CREATE_NODE = 'node/CREATE' as const;
const REMOVE_NODE = 'node/REMOVE' as const;

let nextId = 1;
export const addNode = (name: string) => ({
  type: CREATE_NODE,
  payload: {
    id: nextId++,
    name: name
  }
});
export const removeNode = (id: number) => ({
  type: REMOVE_NODE,
  payload: id
});

export type NodeType = {
  productPrefix: string;
  id: number;
  filterId: number;
  traceVars: string[];
  isEnd: boolean;
  events: EventType[];
};
export type NodesType = NodeType[];
const initialState: NodesType = [];

type NodesAction =
  | ReturnType<typeof addNode>
  | ReturnType<typeof removeNode>

function nodes(state: NodesType = initialState, action: NodesAction): NodesType {
  switch (action.type) {
    case CREATE_NODE:
      return [];
    case REMOVE_NODE:
      return state.filter(
        todo => todo.id !== action.payload
      )
    default:
      return state;
  }
}

export default nodes;