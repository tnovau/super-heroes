import { combineReducers } from "redux";
import { ui } from "../features/core";
import { heroesReducer } from "../features/heroes";

const reducers = {
  heroes: heroesReducer,
  ui: ui.uiReducer
}

export default combineReducers(reducers);
