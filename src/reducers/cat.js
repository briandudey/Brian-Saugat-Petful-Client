import { FETCH_CATS } from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_CATS:
      return {
        ...state,
        data: [action.data]
      };
    default: {
      return { ...state };
    }
  }
}
