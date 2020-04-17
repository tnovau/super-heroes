import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { HeroeDetails, HeroesList, HeroeDetailsRoute, selectorHeroeSelectedId } from "../features/heroes";
import NoMatch from "./NoMatch";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";

const Router = () => {
  const heroeSelectedId = useSelector(selectorHeroeSelectedId);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <HeroesList />
        </Route>
        <HeroeDetailsRoute path="/details" exact heroeSelectedId={heroeSelectedId}>
          <HeroeDetails />
        </HeroeDetailsRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
