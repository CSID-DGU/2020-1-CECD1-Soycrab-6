import { callData } from '../api/callDatas';
import { reducerUtils, createPromiseThunk, handleAsyncActions }  from '../lib/asyncUtils';

const GET_DATAS = 'data/GET_DATAS'; // 요청시작
const GET_DATAS_SUCCESS = `${GET_DATAS}_SUCCESS`; // 요청성공
const GET_DATAS_ERROR = `${GET_DATAS}_ERROR`; // 요청실패

const CREATE_DATA = 'data/CREATE';
const REMOVE_DATA = 'data/REMOVE';

let nextId = 1;
export const addNode = name => ({
  type: CREATE_DATA,
  payload: {
    id: nextId++,
    name: name
  }
});
export const removeNode = id => ({
  type: REMOVE_DATA,
  payload: id
});

// Thunk 생성 함수
export const getDatas = createPromiseThunk(GET_DATAS, callData);
export const goToHome = () => (dispatch, getState, { history }) => {
  history.push('/');
};

const initialState = {
  datas: reducerUtils.initial()
};

const getDatasReducer = handleAsyncActions(GET_DATAS, 'datas', true);

function datas(state = initialState, action) {
  switch (action.type) {
    case GET_DATAS:
    case GET_DATAS_SUCCESS:
    case GET_DATAS_ERROR:
      return getDatasReducer(state, action);
    case CREATE_DATA:
      return [];
    case REMOVE_DATA:
      return state.filter(
        node => node.realId !== action.payload
      )
    default:
      return state;
  }
};

export default datas;