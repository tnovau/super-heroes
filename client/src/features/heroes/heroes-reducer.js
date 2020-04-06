import {
  GET_HEROES_ACTION_SUCCESS,
  SET_FILTER_ACTION,
  SET_HEROE_SELECTED_ACTION,
  SORT_HEROES_ACTION
} from './heroes-action';

export const initialState = {
  sortAsc: true,
  array: [],
  filter: '',
  heroeSelectedId: ''
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

    case SET_FILTER_ACTION:
      return {
        ...state,
        filter: action.payload
      };

    case SET_HEROE_SELECTED_ACTION:
      return {
        ...state,
        heroeSelectedId: action.payload
      };

    default:
      return state;
  }
};
