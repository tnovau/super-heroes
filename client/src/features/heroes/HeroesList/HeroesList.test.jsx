import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import { render } from "@testing-library/react";

import HeroesList from "./HeroesList";
import { getStoreState, baseHeroe, baseHeroeName } from "../test/heroe-mock-data";

describe("HeroesList", () => {
  const renderWithStore = (store) => render(
    <Provider store={store}>
      <MemoryRouter>
        <HeroesList />
      </MemoryRouter>
    </Provider>
  );

  it("should render", () => {
    const { getByText } = renderWithStore(createStore(s => s, getStoreState(baseHeroe)));
    expect(getByText(baseHeroeName)).toBeInTheDocument();
  });

  it("should render with filter", () => {
    const state = getStoreState(baseHeroe);
    const { queryByText } = renderWithStore(createStore(s => s, {
      ...state,
      heroes: {
        ...state.heroes,
        filter: "Spider"
      }
    }));
    expect(queryByText(baseHeroeName)).toBeNull();
  });
});