import { exportData } from "../api/callDatas";
import { createPromiseThunk, handleAsyncActions, reducerUtils }  from '../lib/asyncUtils';

const GET_EXPORT = 'export/GET_EXPORT';
const GET_EXPORT_SUCCESS = 'export/GET_EXPORT_SUCCESS';
const GET_EXPORT_ERROR = 'export/GET_EXPORT_ERROR';
const CLEAR_EXPORT = 'export/CLEAR_EXPORT';

export const getExport = createPromiseThunk(GET_EXPORT, exportData);
export const clearExport = () => ({ type: CLEAR_EXPORT });

const initialState = {
  export: reducerUtils.initial()
};

const getExportReducer = handleAsyncActions(GET_EXPORT, 'export', true);

function exports(state = initialState, action) {
  switch(action.type) {
    case GET_EXPORT:
    case GET_EXPORT_SUCCESS:
    case GET_EXPORT_ERROR:
      return getExportReducer(state, action);
    default:
      return state;
  };
};

export default exports;