import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Router from "./Router";
import { store } from "../redux";

describe('Router', () => {
  it("navigates home when you click the logo", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/some-weird-route']}>
          <Router />
        </MemoryRouter>
      </Provider>
    );

    expect(getByTestId("no-match-container")).toBeInTheDocument();
  });

  it("navigates home when you click the logo", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/some-weird-route']}>
          <Router />
        </MemoryRouter>
      </Provider>
    );

    expect(getByTestId("no-match-container")).toBeInTheDocument();
  });
});
