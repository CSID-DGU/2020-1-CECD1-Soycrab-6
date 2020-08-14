import { combineReducers } from 'redux';
import datas from './datas';
import nodes from './nodes';
import events from './events';

const rootReducer = combineReducers({
  datas,
  nodes,
  events
});

export default rootReducer;