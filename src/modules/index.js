import { combineReducers } from 'redux';
import datas from './datas';
import nodes from './nodes';
import events from './events';
import filters from './filters';

const rootReducer = combineReducers({
  datas,
  nodes,
  events,
  filters
});

export default rootReducer;