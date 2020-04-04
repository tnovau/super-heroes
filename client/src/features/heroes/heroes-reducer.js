import { GET_HEROES_ACTION_SUCCESS } from './heroes-action';

const initialState = [];

export default (state = initialState, action) => {
  if (action.type === GET_HEROES_ACTION_SUCCESS) {
    return action.payload;
  }
  return state;
};
