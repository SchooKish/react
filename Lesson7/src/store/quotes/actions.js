import { API_URL } from "../../utils/constants";

export const GET_QUOTES = "QUOTES::GET_QUOTES";
export const GET_QUOTES_REQUEST = "QUOTES::GET_QUOTES_REQUEST";
export const GET_QUOTES_SUCCESS = "QUOTES::GET_QUOTES_SUCCESS";
export const GET_QUOTES_FAILURE = "QUOTES::GET_QUOTES_FAILURE";

export const getQuotesRequest = () => ({
  type: GET_QUOTES_REQUEST,
});

export const getQuotesSuccess = (data) => ({
  type: GET_QUOTES_SUCCESS,
  payload: data,
});

export const getQuotesFailure = (err) => ({
  type: GET_QUOTES_FAILURE,
  payload: err,
});

export const getQuotes = () => (dispatch) => {
  dispatch(getQuotesRequest());

  fetch(API_URL)
    .then((res) => res.json())
    .then((response) => dispatch(getQuotesSuccess(response)))
    .catch((err) => getQuotesFailure(err));
};
