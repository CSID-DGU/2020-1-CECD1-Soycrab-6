import { callNodeById } from '../api/data';
import { createPromiseThunkById, handleAsyncActionsById }  from '../lib/asyncUtils';

const GET_NODE = 'node/GET_NODE'; // 요청시작
const GET_NODE_SUCCESS = 'node/GET_NODE_SUCCESS'; // 요청성공
const GET_NODE_ERROR = 'node/GET_NODE_ERROR'; // 요청실패

// Thunk 생성 함수
export const getNode = createPromiseThunkById(GET_NODE, callNodeById)

const initialState = {
  node: {}
};

const getNodeReducer = handleAsyncActionsById(GET_NODE, 'node', true);

function nodes(state = initialState, action) {
  switch (action.type) {
    case GET_NODE:
    case GET_NODE_SUCCESS:
    case GET_NODE_ERROR:
      return getNodeReducer(state, action);
    default:
      return state;
  }
};

export default nodes;