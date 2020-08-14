import { combineReducers } from 'redux';
import datas from './datas';
import nodes from './nodes';
import edges from './edges';
import events from './events';
import filters from './filters';

const rootReducer = combineReducers({
  datas,
  nodes,
  edges,
  events,
  filters
});

export default rootReducer;