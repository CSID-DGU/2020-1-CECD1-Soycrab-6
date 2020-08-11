import { callNodeById } from '../api/data';
import { reducerUtils, createPromiseThunkById, handleAsyncActionsById }  from '../lib/asyncUtils';

const GET_NODE = 'node/GET_NODE'; // 요청시작
const GET_NODE_SUCCESS = 'node/GET_NODE_SUCCESS'; // 요청성공
const GET_NODE_ERROR = 'node/GET_NODE_ERROR'; // 요청실패

const CLEAR_NODE = 'node/CLEAR_NODE';

// Thunk 생성 함수
export const getNode = createPromiseThunkById(GET_NODE, callNodeById)
export const goToHome = (dispatch, getState, { history }) => {
  history.push('/');
};

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