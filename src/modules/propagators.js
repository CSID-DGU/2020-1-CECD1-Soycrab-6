import { getPropagatorById } from "../api/callDatas";
import { createPromiseThunk, handleAsyncActions, reducerUtils }  from '../lib/asyncUtils';

const GET_PROPAGATOR = 'propagator/GET_PROPAGATOR'; // 요청시작
const GET_PROPAGATOR_SUCCESS = 'propagator/GET_PROPAGATOR_SUCCESS'; // 요청성공
const GET_PROPAGATOR_ERROR = 'propagator/GET_PROPAGATOR_ERROR'; // 요청실패
const CLEAR_PROPAGATOR = 'propagator/CLEAR_PROPAGATOR';

// Thunk 생성 함수
export const getPropagator = createPromiseThunk(GET_PROPAGATOR, getPropagatorById)
export const clearPropagator = () => ({ type: CLEAR_PROPAGATOR });

const initialState = {
  propagator: reducerUtils.initial()
};

const getPropagatorReducer = handleAsyncActions(GET_PROPAGATOR, 'propagator', true);

function propagators(state = initialState, action) {
  switch (action.type) {
    case GET_PROPAGATOR:
    case GET_PROPAGATOR_SUCCESS:
    case GET_PROPAGATOR_ERROR:
      return getPropagatorReducer(state, action);
    case CLEAR_PROPAGATOR:
      return {
        ...state,
        propagator: reducerUtils.initial()
      }
    default:
      return state;
  }
};

export default propagators;