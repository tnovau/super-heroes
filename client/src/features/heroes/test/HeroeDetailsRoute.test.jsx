import React from "react";
import { Route } from "react-router-dom";
import { render } from "@testing-library/react";

import HeroeDetailsRoute from "../HeroeDetailsRoute";
import { DETAILS_ROUTE } from "../../../routes";
import { ConnectedComponent, createMockStore } from "../../../utils/test-utils";

describe("HeroeDetailsRoute", () => {

  const renderWithId = (id) => render(
    <ConnectedComponent store={createMockStore()} initialEntries={[DETAILS_ROUTE]}>
      <HeroeDetailsRoute heroeSelectedId={id}>
        <div data-testid="children"></div>
      </HeroeDetailsRoute>
      <Route path="*">
        <div>Something</div>
      </Route>
    </ConnectedComponent>
  );

  it("should redirect to the children if the heroeSelectedId is truthy", () => {
    const { getByTestId } = renderWithId("some");
    expect(getByTestId("children")).toBeInTheDocument();
  });

  it("should redirect to the children if the heroeSelectedId is truthy", () => {
    const { getByText } = renderWithId("");
    expect(getByText(/Something/)).toBeInTheDocument();
  });
});