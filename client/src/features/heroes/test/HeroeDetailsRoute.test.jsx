import React from "react";
import { MemoryRouter, Route, BrowserRouter, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
const history = createMemoryHistory();

import HeroeDetailsRoute from "../HeroeDetailsRoute";
import { DETAILS_ROUTE, HOME_ROUTE } from "../../../routes";

describe("HeroeDetailsRoute", () => {
  it("should redirect to the children if the heroeSelectedId is truthy", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={[DETAILS_ROUTE]}>
        <HeroeDetailsRoute heroeSelectedId="some">
          <div data-testid="children"></div>
        </HeroeDetailsRoute>
      </MemoryRouter>
    );

    expect(getByTestId("children")).toBeInTheDocument();
  });

  it("should redirect to the children if the heroeSelectedId is truthy", () => {
    history.push(DETAILS_ROUTE);
    const { getByText } = render(
      <MemoryRouter initialEntries={[DETAILS_ROUTE]}>
        <HeroeDetailsRoute heroeSelectedId="">
            <div data-testid="children"></div>
          </HeroeDetailsRoute>
          <Route path="*">
            <div>Something</div>
          </Route>
      </MemoryRouter>
    );

    expect(getByText(/Something/)).toBeInTheDocument();
  });
});