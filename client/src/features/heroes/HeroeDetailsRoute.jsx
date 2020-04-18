import React from "react";
import { Redirect, Route } from "react-router-dom";

import { HOME_ROUTE } from "../../routes";

const HeroeDetailsRoute = ({ children, heroeSelectedId, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      heroeSelectedId ? (
        children
      ) : (
        <Redirect to={HOME_ROUTE}/>
      )
    }
  />
);

export default HeroeDetailsRoute;
