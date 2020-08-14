import { callAliasById } from '../api/data';
import { createPromiseThunkById, handleAsyncActionsById }  from '../lib/asyncUtils';

const GET_ALIAS = 'alias/GET_ALIAS'; // 요청시작
const GET_ALIAS_SUCCESS = 'alias/GET_ALIAS_SUCCESS'; // 요청성공
const GET_ALIAS_ERROR = 'alias/GET_ALIAS_ERROR'; // 요청실패

export const getAlias = createPromiseThunkById(GET_ALIAS, callAliasById, param => param.name);

const initialState = {
  alias: {}
};

const getAliasReducer = handleAsyncActionsById(GET_ALIAS, 'alias', true);

function aliases(state = initialState, action) {
  switch (action.type) {
    case GET_ALIAS:
    case GET_ALIAS_SUCCESS:
    case GET_ALIAS_ERROR:
      console.log(state)
      return getAliasReducer(state, action);
    default:
      return state;
  };
};

export default aliases;