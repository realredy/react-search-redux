import {GET_SINGLE, DATA_SUCESS, DATA_FAIL} from './singleType';

const initialState = {
  loadingData: true,
  single: [],
  error: "",
};
const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE:
      return {
        ...state,
        loadingData: true,
      };
    case DATA_SUCESS:
      return {
        loadingData: false,
        single: action.payload,
        error: "",
      };
    case DATA_FAIL:
      return {
        loadingData: false,
        single: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default singleReducer;