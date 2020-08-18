import { callFilterById } from '../api/callDatas';
import { createPromiseThunk, handleAsyncActions, reducerUtils }  from '../lib/asyncUtils';

const GET_FILTER = 'filter/GET_FILTER'; // 요청시작
const GET_FILTER_SUCCESS = 'filter/GET_FILTER_SUCCESS'; // 요청성공
const GET_FILTER_ERROR = 'filter/GET_FILTER_ERROR'; // 요청실패
const CLEAR_FILTER = 'filter/CLEAR_FILTER';

// Thunk 생성 함수
export const getFilter = createPromiseThunk(GET_FILTER, callFilterById)
export const clearFilter = () => ({ type: CLEAR_FILTER });

const initialState = {
  filter: reducerUtils.initial()
};

const getFilterReducer = handleAsyncActions(GET_FILTER, 'filter', true);

function filters(state = initialState, action) {
  switch (action.type) {
    case GET_FILTER:
    case GET_FILTER_SUCCESS:
    case GET_FILTER_ERROR:
      return getFilterReducer(state, action);
    case CLEAR_FILTER:
      return {
        ...state,
        filter: reducerUtils.initial()
      }
    default:
      return state;
  }
};

export default filters;