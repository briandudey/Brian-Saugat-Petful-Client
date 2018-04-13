import { FETCH_DOGS} from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_DOGS:
      return {
        ...state,
        data: [action.data]
      };
    default: {
      return { ...state };
    }
  }
}
