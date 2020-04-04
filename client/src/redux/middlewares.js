import { compose, applyMiddleware } from "redux";
import { api } from "../features/core";
import { heroesMiddlewares } from "../features/heroes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(
  applyMiddleware(...heroesMiddlewares, api.apiMiddleware)
);
