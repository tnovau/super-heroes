import { GET_HEROES_ACTION_SUCCESS, SORT_HEROES_ACTION } from './heroes-action';

const initialState = {
  sortAsc: true,
  array: []
};

const sortAsc = (a, b) => ('' + a.name).localeCompare(b.name);
const sortDesc = (a, b) => sortAsc(b, a);

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HEROES_ACTION_SUCCESS:
      return { ...state, array: action.payload };

    case SORT_HEROES_ACTION:
      return {
        ...state,
        array: [...state.array]
          .sort(action.payload ? sortAsc : sortDesc),
        sortAsc: action.payload
      };

    default:
      return state;
  }
};
