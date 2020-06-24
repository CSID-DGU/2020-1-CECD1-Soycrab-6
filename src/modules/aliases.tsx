const CREATE_ALIAS = 'alias/CREATE' as const;
const REMOVE_ALIAS = 'alias/REMOVE' as const;

let nextId = 2;
export const addAlias = (name: string) => ({
  type: CREATE_ALIAS,
  payload: {
    id: nextId++,
    name: name
  }
});
export const removealias = (id: number) => ({
  type: REMOVE_ALIAS,
  payload: id
});

export type AliasState = {
  id: number;
  name: string;
};
export type AliassState = AliasState[];
const initialState: AliassState = [{
  id: 1,
  name: 'parseRequest'
}];

type AliasAction =
  | ReturnType<typeof addAlias>
  | ReturnType<typeof removealias>

function aliass(state: AliassState = initialState, action: AliasAction): AliassState {
  switch (action.type) {
    case CREATE_ALIAS:
      return state.concat(action.payload);
    case REMOVE_ALIAS:
      return state.filter(
        todo => todo.id !== action.payload
      )
    default:
      return state;
  }
}

export default aliass;