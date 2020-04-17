import {
  LOADING_FINISH_ACTION,
  LOADING_START_ACTION
} from "./ui-actions";

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FINISH_ACTION:
      return { ...state, loading: false };
    case LOADING_START_ACTION:
      return { ...state, loading: true };
    default:
      return state;
  }
};
