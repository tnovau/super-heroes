import {
  GET_HEROES_ACTION,
  GET_HEROES_ACTION_ERROR,
  getHeroesError,
  getHeroesSuccess,
  GET_HEROES_ACTION_SUCCESS
} from "./heroes-action";
import { api, ui } from "../core";

const AVENGERS_SERIE_ID = 24229;
export const getSeriesCharactersUrl = () => `/api/marvel/series/${AVENGERS_SERIE_ID}/characters`

export const heroesGetMiddleware = () => next => action => {
  if (action.type === GET_HEROES_ACTION) {
    next(ui.loadingStart());
    next(api.apiCall(
      getSeriesCharactersUrl(),
      { method: "GET" },
      getHeroesSuccess,
      getHeroesError));
  }
  next(action);
};

export const heroesGetErrorMiddleware = ({ dispatch }) => next => action => {
  if (action.type === GET_HEROES_ACTION_ERROR) {
    dispatch(ui.loadingFinish());
  }
  next(action);
}

export const heroesGetSuccessMiddleware = ({ dispatch }) => next => action => {
  if (action.type === GET_HEROES_ACTION_SUCCESS) {
    next({ ...action, payload: action.payload.data.results });
    return dispatch(ui.loadingFinish());;
  }
  next(action);
}

const heroesMiddlewares = [
  heroesGetMiddleware,
  heroesGetErrorMiddleware,
  heroesGetSuccessMiddleware
];

export default heroesMiddlewares;