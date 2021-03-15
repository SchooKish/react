import {
  GET_QUOTES_REQUEST,
  GET_QUOTES_FAILURE,
  GET_QUOTES_SUCCESS,
} from "./actions";
import { STATUSES } from "../../utils/constants";

const initialState = {
  quotes: [],
  request: STATUSES.IDLE,
  error: null,
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.payload,
        request: STATUSES.SUCCESS,
      };
    case GET_QUOTES_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default quotesReducer;
