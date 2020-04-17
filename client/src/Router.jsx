import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { HeroeDetails, HeroesList } from "./features/heroes";
import NoMatch from "./NoMatch";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <HeroesList />
      </Route>
      <Route path="/:id">
        <HeroeDetails />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
