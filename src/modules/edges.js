import { callEdgeById } from '../api/data';
import { createPromiseThunk, handleAsyncActions }  from '../lib/asyncUtils';

const GET_EDGE = 'edge/GET_EDGE'; // 요청시작
const GET_EDGE_SUCCESS = 'edge/GET_EDGE_SUCCESS'; // 요청성공
const GET_EDGE_ERROR = 'edge/GET_EDGE_ERROR'; // 요청실패

// Thunk 생성 함수
export const getEdge = createPromiseThunk(GET_EDGE, callEdgeById);

const initialState = {
  edge: {}

};

const getEdgeReducer = handleAsyncActions(GET_EDGE, 'edge', true);

function edges(state = initialState, action) {
  switch (action.type) {
    case GET_EDGE:
    case GET_EDGE_SUCCESS:
    case GET_EDGE_ERROR:
      return getEdgeReducer(state, action);
    default:
      return state;
  }
};

export default edges;