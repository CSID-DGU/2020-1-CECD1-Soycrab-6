import { callEventById } from '../api/data';
import { createPromiseThunkById, handleAsyncActionsById }  from '../lib/asyncUtils';

const GET_EVENT = 'event/GET_EVENT'; // 요청시작
const GET_EVENT_SUCCESS = 'event/GET_EVENT_SUCCESS'; // 요청성공
const GET_EVENT_ERROR = 'event/GET_EVENT_ERROR'; // 요청실패

export const getEvent = createPromiseThunkById(GET_EVENT, callEventById, param => param.realId);

const initialState = {
  event: {}
};

const getEventReducer = handleAsyncActionsById(GET_EVENT, 'event', true);

function events(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT:
    case GET_EVENT_SUCCESS:
    case GET_EVENT_ERROR:
      console.log(state)
      return getEventReducer(state, action);
    default:
      return state;
  };
};

export default events;