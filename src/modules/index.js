import { combineReducers } from 'redux';
import datas from './datas';
import nodes from './nodes';

const rootReducer = combineReducers({
  datas,
  nodes
});

export default rootReducer;