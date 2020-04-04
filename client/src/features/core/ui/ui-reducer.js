import {
  LOADING_START_ACTION,
  LOADING_FINISH_ACTION
} from './ui-actions';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START_ACTION:
      return { ...state, loading: true };
    case LOADING_FINISH_ACTION:
      return { ...state, loading: false };
    default:
      return state;
  }
};
