import { callNodeById } from '../api/data';
import { reducerUtils, createPromiseThunk, handleAsyncActions }  from '../lib/asyncUtils';

const GET_NODE = 'node/GET_NODE'; // 요청시작
const GET_NODE_SUCCESS = 'node/GET_NODE_SUCCESS'; // 요청성공
const GET_NODE_ERROR = 'node/GET_NODE_ERROR'; // 요청실패

const CLEAR_NODE = 'node/CLEAR_NODE';

// Thunk 생성 함수
export const getNode = createPromiseThunk(GET_NODE, callNodeById);

export const clearNode = () => ({ type: CLEAR_NODE });

const initialState = {
  node: reducerUtils.initial()
};

const getNodeReducer = handleAsyncActions(GET_NODE, 'node');

function nodes(state = initialState, action) {
  switch (action.type) {
    case GET_NODE:
    case GET_NODE_SUCCESS:
    case GET_NODE_ERROR:
      return getNodeReducer(state, action);
    case CLEAR_NODE:
      return {
        ...state,
        node: reducerUtils.initial()
      }
    default:
      return state;
  }
};

export default nodes;