export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  // Thunk 생성함수
  return param => async dispatch => {
    // 요청이 시작 됨
    dispatch({ type });
    try {
      // 요청이 성공했을 때
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload
      })
    } catch(e) {
      // 요청이 실패했을 때
      dispatch({
        type: ERROR,
        payload: e,
        error: true
      })
    };
  };
};

export const handleAsyncActions = (type, key, keepData) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading(keepData ? state[key].data : null),
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload)
        }
      default:
        return state;
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    data,
    loading: false,
    error: null
  }),
  loading: (prevState = null) => ({
    data: prevState,
    loading: true,
    error: null
  }),
  success: data => ({
    data,
    loading: false,
    error: null
  }),
  error: error => ({
    data: null,
    loading: false,
    error
  })
};