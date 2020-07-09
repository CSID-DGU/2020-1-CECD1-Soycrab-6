const CREATE_ALIAS = 'alias/CREATE' as const;
const REMOVE_ALIAS = 'alias/REMOVE' as const;
const TOGGLE_ALIAS = 'alias/TOGGLE' as const;

let nextId = 2;
export const addAlias = (nodeId: number, name: string) => ({
  type: CREATE_ALIAS,
  payload: {
    id: nextId++,
    nodeId: nodeId,
    name: name,
    active: true
  }
});
export const removeAlias = (id: number) => ({
  type: REMOVE_ALIAS,
  payload: id
});
export const toggleAlias = (id: number) => ({
  type: TOGGLE_ALIAS,
  payload: id
});

export type AliasState = {
  id: number;
  nodeId: number;
  name: string;
  active: boolean;
};
export type AliassState = AliasState[];
const initialState: AliassState = [];

type AliasAction =
  | ReturnType<typeof addAlias>
  | ReturnType<typeof removeAlias>
  | ReturnType<typeof toggleAlias>

function aliass(state: AliassState = initialState, action: AliasAction): AliassState {
  switch (action.type) {
    case CREATE_ALIAS:
      return state.concat(action.payload);
    case REMOVE_ALIAS:
      return state.filter(
        alias => alias.id !== action.payload
      )
    case TOGGLE_ALIAS:
      return state.map(
        alias => alias.id === action.payload ? {...alias, active: !alias.active} : alias
      )
    default:
      return state;
  }
}

export default aliass;