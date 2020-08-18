import { callEventById } from '../api/callDatas';
import { createPromiseThunk, handleAsyncActions, reducerUtils }  from '../lib/asyncUtils';

const GET_EVENT = 'event/GET_EVENT'; // 요청시작
const GET_EVENT_SUCCESS = 'event/GET_EVENT_SUCCESS'; // 요청성공
const GET_EVENT_ERROR = 'event/GET_EVENT_ERROR'; // 요청실패
const CLEAR_EVENT = 'event/CLEAR_EVENT'; 

const realIdSelector = param => param.realId;
export const getEvent = createPromiseThunk(GET_EVENT, callEventById, realIdSelector);
export const clearEvent = () => ({ type: CLEAR_EVENT });

const initialState = {
  event: reducerUtils.initial()
};

const getEventReducer = handleAsyncActions(GET_EVENT, 'event', true);

function events(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT:
    case GET_EVENT_SUCCESS:
    case GET_EVENT_ERROR:
      return getEventReducer(state, action);
    case CLEAR_EVENT:
      return {
        ...state,
        event: reducerUtils.initial()
      }
    default:
      return state;
  };
};

export default events;