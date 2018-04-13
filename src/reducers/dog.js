import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCESS,
  FETCH_DOGS_FAILURE
} from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DOGS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DOGS_SUCESS:
      return {
        ...state,
        data: [action.payload]
      }
      case FETCH_DOGS_FAILURE: 
      return {
        ...state,
        error: action.payload
      }
    default: {
      return { ...state };
    }
  }
}
