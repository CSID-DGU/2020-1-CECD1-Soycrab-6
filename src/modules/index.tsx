import { combineReducers } from 'redux';
import nodes from './nodes';
import aliases from './aliases';

const rootReducer = combineReducers({
  nodes,
  aliases
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;