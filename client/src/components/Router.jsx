import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import { useSelector } from "react-redux";

import NoMatch from "./NoMatch";

import {
  HeroeDetails,
  HeroesList,
  HeroeDetailsRoute,
  selectHeroeSelectedId
} from "../features/heroes";
import { HOME_ROUTE, DETAILS_ROUTE } from "../routes";

const Router = () => (
  <Switch>
    <Route path={HOME_ROUTE} exact>
      <HeroesList />
    </Route>
    <HeroeDetailsRoute
      path={DETAILS_ROUTE}
      exact
      heroeSelectedId={useSelector(selectHeroeSelectedId)}>
      <HeroeDetails />
    </HeroeDetailsRoute>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
);

export default Router;
