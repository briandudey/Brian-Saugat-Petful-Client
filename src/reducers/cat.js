import { FETCH_CATS_REQUEST, FETCH_CATS_SUCESS, FETCH_CATS_FAILURE } from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_CATS_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_CATS_SUCESS:
      return {
        ...state,
        data: [action.payload]
      }
      case FETCH_CATS_FAILURE: 
      return {
        ...state,
        error: action.payload
      }
    default: {
      return { ...state };
    }
  }
}
