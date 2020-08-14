import { combineReducers } from 'redux';
import datas from './datas';
import nodes from './nodes';
import edges from './edges';
import aliaes from './aliases';
import events from './events';
import filters from './filters';

const rootReducer = combineReducers({
  datas,
  nodes,
  edges,
  aliaes,
  events,
  filters
});

export default rootReducer;