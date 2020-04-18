import React from "react";
import { render } from "@testing-library/react";

import HeroesList from "./HeroesList";

import {
  ConnectedComponent,
  createMockStore,
  getStoreState,
  baseHeroeName
} from "../../../utils/test-utils";

describe("HeroesList", () => {
  const renderWithStore = (store) => render(
    <ConnectedComponent store={store}>
      <HeroesList />
    </ConnectedComponent>
  );

  it("should render", () => {
    const { getByText } = renderWithStore(createMockStore(getStoreState()));
    expect(getByText(baseHeroeName)).toBeInTheDocument();
  });

  it("should render with filter", () => {
    const state = getStoreState();
    const { queryByText } = renderWithStore(createMockStore({
      ...state,
      heroes: {
        ...state.heroes,
        filter: "Spider"
      }
    }));
    expect(queryByText(baseHeroeName)).toBeNull();
  });

  it("should render loading if it is loading heroes", () => {
    const baseState = getStoreState();
    const { getByTestId } = renderWithStore(createMockStore({
      ...baseState,
      ui: { loading: true }
    }));
    expect(getByTestId("heroes-list-loading")).toBeInTheDocument();
  });
});