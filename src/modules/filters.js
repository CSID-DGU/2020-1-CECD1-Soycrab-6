import { callFilterById } from '../api/data';
import { createPromiseThunk, handleAsyncActions }  from '../lib/asyncUtils';

const GET_FILTER = 'filter/GET_FILTER'; // 요청시작
const GET_FILTER_SUCCESS = 'filter/GET_FILTER_SUCCESS'; // 요청성공
const GET_FILTER_ERROR = 'filter/GET_FILTER_ERROR'; // 요청실패

// Thunk 생성 함수
export const getFilter = createPromiseThunk(GET_FILTER, callFilterById)

const initialState = {
  filter: {}
};

const getFilterReducer = handleAsyncActions(GET_FILTER, 'filter');

function filters(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER:
    case GET_FILTER_SUCCESS:
    case GET_FILTER_ERROR:
      return getFilterReducer(state, action);
    default:
      return state;
  }
};

export default filters;