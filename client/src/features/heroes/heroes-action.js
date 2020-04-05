export const GET_HEROES_ACTION = "[heroes] - get";
export const GET_HEROES_ACTION_SUCCESS = "[heroes] - get SUCCESS";
export const GET_HEROES_ACTION_ERROR = "[heroes] - get ERROR";

export const SORT_HEROES_ACTION = "[heroes] - sort";

export const SET_FILTER_ACTION = "[heroes] - set filter";

export const getHeroes = () => ({
  type: GET_HEROES_ACTION
});

export const getHeroesSuccess = (payload) => ({
  type: GET_HEROES_ACTION_SUCCESS,
  payload
});

export const getHeroesError = (error) => ({
  type: GET_HEROES_ACTION_ERROR,
  payload: error
});

export const sortHeroes = (asc) => ({
  type: SORT_HEROES_ACTION,
  payload: asc
});

export const setFilter = (filter) => ({
  type: SET_FILTER_ACTION,
  payload: filter
});
