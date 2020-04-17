import React from "react";
import { Redirect, Route } from "react-router-dom";

import { HOME_ROUTE } from "../../routes";

const HeroeDetailsRoute = ({ children, heroeSelectedId, ...rest }) => <Route
  {...rest}
  render={({ location }) =>
    heroeSelectedId ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: HOME_ROUTE,
          state: { from: location }
        }}
      />
    )
  }
/>;

export default HeroeDetailsRoute;
