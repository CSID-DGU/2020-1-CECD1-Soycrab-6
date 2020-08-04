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

export type NodeState = {
  id: number;
  filterId: number;
  traceVars: string[];
  isEnd: boolean;
  events: any[];
};
export type NodesState = NodeState[];
const initialState: NodesState = [];

type NodesAction =
  | ReturnType<typeof addNode>
  | ReturnType<typeof removeNode>

function nodes(state: NodesState = initialState, action: NodesAction): NodesState {
  switch (action.type) {
    case CREATE_NODE:
      return state.concat(action.payload);
    case REMOVE_NODE:
      return state.filter(
        todo => todo.id !== action.payload
      )
    default:
      return state;
  }
}

export default nodes;