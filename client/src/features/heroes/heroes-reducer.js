import {
  GET_HEROES_ACTION_SUCCESS,
  SET_FILTER_ACTION,
  SET_HEROE_SELECTED_ACTION,
  SORT_HEROES_ACTION
} from "./heroes-action";
import { sortAsc, sortDesc } from "../../utils";

export const initialState = {
  sortAsc: true,
  array: [],
  filter: "",
  heroeSelectedId: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_HEROES_ACTION_SUCCESS:
      return { ...state, array: action.payload };

    case SORT_HEROES_ACTION:
      return {
        ...state,
        array: [...state.array]
          .sort((a, b) => action.payload
            ? sortAsc(a.name, b.name)
            : sortDesc(a.name, b.name)),
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
