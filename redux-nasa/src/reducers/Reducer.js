import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS
} from '../actions';

export const initialState = {
  details: [''],
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        details: [action.payload],
        error: ''
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}; //close reducer
